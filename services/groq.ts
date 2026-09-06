import Groq from 'groq-sdk';
import { PROMPT_TEMPLATE } from './prompt';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export const GROQ_MODEL = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';

export async function generateWithGroq(input: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: PROMPT_TEMPLATE(input),
      },
    ],
    model: GROQ_MODEL,
  });

  return completion.choices[0]?.message?.content || '';
}
