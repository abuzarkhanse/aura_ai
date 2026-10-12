import { AIGateway, MockAIProvider, OllamaProvider } from "@aura/ai";

const providerName = process.env.AI_PROVIDER ?? "mock";

const provider =
  providerName === "ollama" ? new OllamaProvider() : new MockAIProvider();

export const aiGateway = new AIGateway(provider);
