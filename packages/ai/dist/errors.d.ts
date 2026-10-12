export declare class AIProviderError extends Error {
    readonly provider?: string | undefined;
    readonly cause?: unknown;
    constructor(message: string, provider?: string | undefined, cause?: unknown);
}
export declare class AIConfigurationError extends Error {
    constructor(message: string);
}
