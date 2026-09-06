import { Mistral } from '@mistralai/mistralai';
import { PROMPT_TEMPLATE } from './prompt';

const apiKey = process.env.MISTRAL_API_KEY;

const client = new Mistral({ apiKey: apiKey ?? '' });

export const MISTRAL_MODEL = 'mistral-small-latest';

export async function generateWithMistral(input: string): Promise<string> {
  const result = await client.chat.complete({
    model: MISTRAL_MODEL,
    messages: [{ role: 'user', content: PROMPT_TEMPLATE(input) }],
  });

  const choice = result.choices?.[0];
  if (choice?.message?.content && typeof choice.message.content === 'string') {
    return choice.message.content;
  }
  return '';
}
