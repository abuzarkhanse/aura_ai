import type {
  GenerateRequest,
  GenerateResponse,
  AIChunk,
  EmbeddingResponse,
} from "./types.js";

import type { AIProvider } from "./provider.js";

export class AIGateway {
  constructor(private readonly provider: AIProvider) {}

  async generate(request: GenerateRequest): Promise<GenerateResponse> {
    return this.provider.generate(request);
  }

  stream(request: GenerateRequest): AsyncIterable<AIChunk> {
    return this.provider.stream(request);
  }

  embed(input: string): Promise<EmbeddingResponse> {
    return this.provider.embed(input);
  }
}
