export interface OpenAiResponseBody {
  choices: OpenAiResponseChoice[];
  created: number;
  id: string;
  model: string;
  object: string;
  usage: {
    completion_tokens: number;
    prompt_tokens: number;
    total_tokens: number;
  }
}

export interface OpenAiResponseChoice {
  finish_reason: string;
  index: number;
  logprobs: any;
  text: string;
}