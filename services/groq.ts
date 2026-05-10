import Groq from 'groq-sdk';
import { PROMPT_TEMPLATE } from './prompt';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function generateWithGroq(input: string): Promise<string> {
  const completion = await groq.chat.completions.create({
    messages: [
      {
        role: 'user',
        content: PROMPT_TEMPLATE(input),
      },
    ],
    model: 'llama-3.3-70b-versatile',
  });

  return completion.choices[0]?.message?.content || '';
}
