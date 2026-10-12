import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { aiGateway } from "./modules/ai/index.js";

import { buildContext } from "@aura/ai";

const app = Fastify({
  logger: true,
});

async function bootstrap() {
  await app.register(helmet);

  await app.register(cors, {
    origin: true,
  });

  // Register every route BEFORE app.listen().
  app.get("/health", async () => ({
    status: "ok",
    service: "aura-api",
    version: "0.1.0",
  }));

  app.post<{ Body: { message: string } }>(
    "/api/v1/ai/test",
    async (request, reply) => {
      const { message } = request.body ?? {};

      if (typeof message !== "string" || message.trim().length === 0) {
        return reply.code(400).send({
          error: "A non-empty message is required",
        });
      }

      const response = await aiGateway.generate({
        messages: [
          {
            role: "system",
            content: "You are AURA, a helpful AI assistant.",
          },
          {
            role: "user",
            content: message,
          },
        ],
      });

      return response;
    },
  );

  const port = Number(process.env.PORT ?? 4000);
  const host = process.env.HOST ?? "127.0.0.1";

  app.post<{
    Body: {
      message: string;
      history?: Array<{
        role: "user" | "assistant";
        content: string;
      }>;
      memories?: string[];
    };
  }>("/api/v1/ai/stream", async (request, reply) => {
    const { message, history = [], memories = [] } = request.body ?? {};

    if (typeof message !== "string" || !message.trim()) {
      return reply.code(400).send({
        error: "A non-empty message is required",
      });
    }

    if (
      !Array.isArray(history) ||
      history.some(
        (item) =>
          !item ||
          !["user", "assistant"].includes(item.role) ||
          typeof item.content !== "string",
      ) ||
      !Array.isArray(memories) ||
      memories.some((item) => typeof item !== "string")
    ) {
      return reply.code(400).send({
        error: "Invalid history or memories",
      });
    }

    const context = buildContext({
      history,
      relevantMemories: memories,
      userMessage: message,
    });

    reply.hijack();

    reply.raw.writeHead(200, {
      "Content-Type": "text/event-stream; charset=utf-8",
      "Cache-Control": "no-cache, no-transform",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });

    try {
      for await (const chunk of aiGateway.stream({
        messages: context.messages,
      })) {
        if (reply.raw.destroyed) break;

        reply.raw.write(`data: ${JSON.stringify(chunk)}\n\n`);
      }

      if (!reply.raw.destroyed) {
        reply.raw.end();
      }
    } catch (error) {
      request.log.error({ err: error }, "AI stream failed");

      if (!reply.raw.destroyed) {
        reply.raw.write(
          `event: error\ndata: ${JSON.stringify({
            error: "AI stream failed",
          })}\n\n`,
        );

        reply.raw.end();
      }
    }
  });

  await app.listen({ port, host });
}

bootstrap().catch((error) => {
  app.log.error(error);
  process.exitCode = 1;
});
