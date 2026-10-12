export type MessageRole = "system" | "user" | "assistant" | "tool";
export interface AIMessage {
    role: MessageRole;
    content: string;
}
export interface GenerateRequest {
    messages: AIMessage[];
    model?: string;
    temperature?: number;
    maxTokens?: number;
}
export interface GenerateResponse {
    content: string;
    model: string;
    provider: string;
    usage?: {
        promptTokens?: number;
        completionTokens?: number;
        totalTokens?: number;
    };
}
export interface AIChunk {
    content: string;
    done: boolean;
}
export interface EmbeddingResponse {
    embedding: number[];
    model: string;
    dimensions: number;
}
