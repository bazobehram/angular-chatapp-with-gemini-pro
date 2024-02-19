export interface GeminiConfig {
    apiKey: string;
    temperature: number;
    bot: {
      id: number;
      value: string;
    };
    model: string;
  }