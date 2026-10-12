import type { AIMessage } from "../types.js";

export interface ContextInput {
  systemPrompt?: string;
  history: AIMessage[];
  relevantMemories?: string[];
  userMessage: string;
}

export interface BuiltContext {
  messages: AIMessage[];
}
