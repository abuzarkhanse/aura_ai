import type { AIProvider } from "../provider.js";
import type { GenerateRequest, GenerateResponse, AIChunk, EmbeddingResponse } from "../types.js";
export declare class OllamaProvider implements AIProvider {
    readonly name = "ollama";
    private readonly baseUrl;
    private readonly model;
    private readonly embeddingModel;
    private post;
    generate(request: GenerateRequest): Promise<GenerateResponse>;
    stream(request: GenerateRequest): AsyncIterable<AIChunk>;
    embed(input: string): Promise<EmbeddingResponse>;
}
