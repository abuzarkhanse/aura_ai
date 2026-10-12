import type { GenerateRequest, GenerateResponse, AIChunk, EmbeddingResponse } from "../types.js";
import type { AIProvider } from "../provider.js";
export declare class MockAIProvider implements AIProvider {
    readonly name = "mock";
    generate(request: GenerateRequest): Promise<GenerateResponse>;
    stream(request: GenerateRequest): AsyncIterable<AIChunk>;
    embed(_input: string): Promise<EmbeddingResponse>;
}
