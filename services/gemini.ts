import { GoogleGenerativeAI } from '@google/generative-ai';
import { PROMPT_TEMPLATE } from './prompt';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY ?? '');

/**
 * Generates a polite message using Google Gemini.
 * Note: Currently disabled in the main API route due to quota issues in free tier.
 */
export async function generateWithGemini(input: string): Promise<string> {
  const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash-lite' });
  const result = await model.generateContent(PROMPT_TEMPLATE(input));
  return result.response.text();
}
