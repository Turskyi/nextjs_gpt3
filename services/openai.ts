import { Configuration, OpenAIApi } from 'openai';
import { PROMPT_TEMPLATE } from './prompt';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function generateWithOpenAI(input: string): Promise<string> {
  const completion = await openai.createCompletion({
    model: 'gpt-3.5-turbo-instruct',
    prompt: PROMPT_TEMPLATE(input),
    max_tokens: 500,
    temperature: 1,
    presence_penalty: 0,
    frequency_penalty: 0,
  });

  return completion.data.choices[0].text || '';
}
