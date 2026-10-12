import type {
  GenerateRequest,
  GenerateResponse,
  AIChunk,
  EmbeddingResponse,
} from "./types.js";

export interface AIProvider {
  readonly name: string;

  generate(request: GenerateRequest): Promise<GenerateResponse>;

  stream(request: GenerateRequest): AsyncIterable<AIChunk>;

  embed(input: string): Promise<EmbeddingResponse>;
}
