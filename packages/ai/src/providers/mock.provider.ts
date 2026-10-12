import type {
  GenerateRequest,
  GenerateResponse,
  AIChunk,
  EmbeddingResponse,
} from "../types.js";

import type { AIProvider } from "../provider.js";

export class MockAIProvider implements AIProvider {
  readonly name = "mock";

  async generate(request: GenerateRequest): Promise<GenerateResponse> {
    const lastMessage = request.messages[request.messages.length - 1];

    return {
      content: `AURA received: "${lastMessage?.content ?? ""}"`,
      model: request.model ?? "mock-model",
      provider: this.name,
    };
  }

  async *stream(request: GenerateRequest): AsyncIterable<AIChunk> {
    const response = await this.generate(request);
    const words = response.content.split(" ");

    for (const word of words) {
      yield {
        content: `${word} `,
        done: false,
      };
    }

    yield {
      content: "",
      done: true,
    };
  }

  async embed(_input: string): Promise<EmbeddingResponse> {
    return {
      embedding: Array(1536).fill(0),
      model: "mock-embedding",
      dimensions: 1536,
    };
  }
}
