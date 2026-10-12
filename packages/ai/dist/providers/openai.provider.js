import OpenAI from "openai";
export class OpenAIProvider {
    model;
    embeddingModel;
    name = "openai";
    client;
    constructor(model = process.env.AI_MODEL ?? "gpt-5.5", embeddingModel = process.env.AI_EMBEDDING_MODEL ??
        "text-embedding-3-small") {
        this.model = model;
        this.embeddingModel = embeddingModel;
        const apiKey = process.env.OPENAI_API_KEY;
        if (!apiKey) {
            throw new Error("OPENAI_API_KEY is required");
        }
        this.client = new OpenAI({ apiKey });
    }
    async generate(request) {
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
    async *stream(request) {
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
    async embed(input) {
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
