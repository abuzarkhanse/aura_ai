export class AIProviderError extends Error {
    provider;
    cause;
    constructor(message, provider, cause) {
        super(message);
        this.provider = provider;
        this.cause = cause;
        this.name = "AIProviderError";
    }
}
export class AIConfigurationError extends Error {
    constructor(message) {
        super(message);
        this.name = "AIConfigurationError";
    }
}
