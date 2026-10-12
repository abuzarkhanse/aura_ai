export class AIGateway {
    provider;
    constructor(provider) {
        this.provider = provider;
    }
    async generate(request) {
        return this.provider.generate(request);
    }
    stream(request) {
        return this.provider.stream(request);
    }
    embed(input) {
        return this.provider.embed(input);
    }
}
