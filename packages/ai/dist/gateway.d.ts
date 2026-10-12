import type { GenerateRequest, GenerateResponse, AIChunk, EmbeddingResponse } from "./types.js";
import type { AIProvider } from "./provider.js";
export declare class AIGateway {
    private readonly provider;
    constructor(provider: AIProvider);
    generate(request: GenerateRequest): Promise<GenerateResponse>;
    stream(request: GenerateRequest): AsyncIterable<AIChunk>;
    embed(input: string): Promise<EmbeddingResponse>;
}
