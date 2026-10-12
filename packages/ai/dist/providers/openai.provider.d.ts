import type { AIProvider } from "../provider.js";
import type { GenerateRequest, GenerateResponse, AIChunk, EmbeddingResponse } from "../types.js";
export declare class OpenAIProvider implements AIProvider {
    private readonly model;
    private readonly embeddingModel;
    readonly name = "openai";
    private readonly client;
    constructor(model?: string, embeddingModel?: string);
    generate(request: GenerateRequest): Promise<GenerateResponse>;
    stream(request: GenerateRequest): AsyncIterable<AIChunk>;
    embed(input: string): Promise<EmbeddingResponse>;
}
