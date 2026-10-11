import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

const app = Fastify({
  logger: true,
});

async function bootstrap() {
  await app.register(helmet);

  await app.register(cors, {
    origin: true,
  });

  app.get("/health", async () => {
    return {
      status: "ok",
      service: "aura-api",
      version: "0.1.0",
    };
  });

  const port = Number(process.env.PORT ?? 4000);
  const host = process.env.HOST ?? "0.0.0.0";

  await app.listen({
    port,
    host,
  });
}

bootstrap().catch((error) => {
  app.log.error(error);
  process.exit(1);
});
