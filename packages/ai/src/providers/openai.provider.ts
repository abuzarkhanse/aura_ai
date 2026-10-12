import OpenAI from "openai";

import type { AIProvider } from "../provider.js";

import type {
  GenerateRequest,
  GenerateResponse,
  AIChunk,
  EmbeddingResponse,
} from "../types.js";

export class OpenAIProvider implements AIProvider {
  readonly name = "openai";

  private readonly client: OpenAI;

  constructor(
    private readonly model = process.env.AI_MODEL ?? "gpt-5.5",
    private readonly embeddingModel = process.env.AI_EMBEDDING_MODEL ??
      "text-embedding-3-small",
  ) {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error("OPENAI_API_KEY is required");
    }

    this.client = new OpenAI({ apiKey });
  }

  async generate(request: GenerateRequest): Promise<GenerateResponse> {
    const response = await this.client.responses.create({
      model: request.model ?? this.model,
      input: request.messages.map((message) => ({
        role: message.role === "tool" ? "user" : message.role,
        content: message.content,
      })),
      max_output_tokens: request.maxTokens ?? 1000,
    });

    return {
      content: response.output_text,
      model: response.model,
      provider: this.name,
    };
  }

  async *stream(request: GenerateRequest): AsyncIterable<AIChunk> {
    const stream = await this.client.responses.create({
      model: request.model ?? this.model,
      input: request.messages.map((message) => ({
        role: message.role === "tool" ? "user" : message.role,
        content: message.content,
      })),
      max_output_tokens: request.maxTokens ?? 1000,
      stream: true,
    });

    for await (const event of stream) {
      if (event.type === "response.output_text.delta") {
        yield {
          content: event.delta,
          done: false,
        };
      }
    }

    yield {
      content: "",
      done: true,
    };
  }

  async embed(input: string): Promise<EmbeddingResponse> {
    const response = await this.client.embeddings.create({
      model: this.embeddingModel,
      input,
      encoding_format: "float",
    });

    const embedding = response.data[0]?.embedding;

    if (!embedding) {
      throw new Error("Embedding generation returned no vector");
    }

    return {
      embedding,
      model: response.model,
      dimensions: embedding.length,
    };
  }
}
