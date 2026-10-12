import type { AIProvider } from "../provider.js";
import type {
  GenerateRequest,
  GenerateResponse,
  AIChunk,
  EmbeddingResponse,
} from "../types.js";

export class OllamaProvider implements AIProvider {
  readonly name = "ollama";

  private readonly baseUrl =
    process.env.OLLAMA_BASE_URL ?? "http://127.0.0.1:11434";

  private readonly model = process.env.AI_MODEL ?? "qwen2.5:3b";

  private readonly embeddingModel =
    process.env.AI_EMBEDDING_MODEL ?? "nomic-embed-text";

  private async post<T>(path: string, body: unknown): Promise<T> {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(120_000),
    });

    if (!response.ok) {
      const detail = await response.text();
      throw new Error(`Ollama ${path} failed (${response.status}): ${detail}`);
    }

    return response.json() as Promise<T>;
  }

  async generate(request: GenerateRequest): Promise<GenerateResponse> {
    const result = await this.post<{
      model: string;
      message: { content: string };
    }>("/api/chat", {
      model: request.model ?? this.model,
      messages: request.messages,
      stream: false,
      options: {
        ...(request.temperature !== undefined
          ? { temperature: request.temperature }
          : {}),
        ...(request.maxTokens !== undefined
          ? { num_predict: request.maxTokens }
          : {}),
      },
    });

    return {
      content: result.message.content,
      model: result.model,
      provider: this.name,
    };
  }

  async *stream(request: GenerateRequest): AsyncIterable<AIChunk> {
    const response = await fetch(`${this.baseUrl}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        model: request.model ?? this.model,
        messages: request.messages,
        stream: true,
        options: {
          ...(request.temperature !== undefined
            ? { temperature: request.temperature }
            : {}),
          ...(request.maxTokens !== undefined
            ? { num_predict: request.maxTokens }
            : {}),
        },
      }),
      signal: AbortSignal.timeout(120_000),
    });

    if (!response.ok) {
      throw new Error(
        `Ollama streaming failed (${response.status}): ${await response.text()}`,
      );
    }

    if (!response.body) {
      throw new Error("Ollama returned no response stream");
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = "";

    try {
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });

        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.trim()) continue;

          const event = JSON.parse(line) as {
            message?: { content?: string };
            done?: boolean;
            error?: string;
          };

          if (event.error) throw new Error(event.error);

          if (event.message?.content) {
            yield {
              content: event.message.content,
              done: false,
            };
          }
        }
      }

      buffer += decoder.decode();

      if (buffer.trim()) {
        const event = JSON.parse(buffer) as {
          message?: { content?: string };
          error?: string;
        };

        if (event.error) throw new Error(event.error);

        if (event.message?.content) {
          yield { content: event.message.content, done: false };
        }
      }
    } finally {
      reader.releaseLock();
    }

    yield { content: "", done: true };
  }

  async embed(input: string): Promise<EmbeddingResponse> {
    const result = await this.post<{
      model: string;
      embeddings: number[][];
    }>("/api/embed", {
      model: this.embeddingModel,
      input,
    });

    const embedding = result.embeddings[0];

    if (!embedding?.length) {
      throw new Error("Ollama returned no embedding vector");
    }

    return {
      embedding,
      model: result.model,
      dimensions: embedding.length,
    };
  }
}
