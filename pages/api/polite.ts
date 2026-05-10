import type { NextApiRequest, NextApiResponse } from 'next';
import { INPUT_MAX_LENGTH } from '../../constants';
import { generateWithGroq } from '../../services/groq';
import { generateWithOpenAI } from '../../services/openai';
// import { generateWithGemini } from '../../services/gemini';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const input = request.query.prompt?.toString();

  if (!input) {
    return response
      .status(400)
      .json({ error: 'Please provide a prompt query  ಠ_ಠ' });
  } else if (input.length < 5) {
    return response.status(400).json({ error: '( ͡° ͜ʖ ͡°) Prompt too short' });
  } else if (input.length > INPUT_MAX_LENGTH) {
    return response.status(400).json({
      error: `Sorry, current limit is ${INPUT_MAX_LENGTH} characters per request. へ‿(ツ)‿ㄏ`,
    });
  }

  let politerMessage: string | undefined;

  /**
   * AI PROVIDER SELECTION
   *
   * Current Primary: Groq (Llama 3.3 70B)
   * Fallback: OpenAI (GPT-3.5)
   *
   * To switch to Gemini as primary:
   * 1. Import generateWithGemini from '../../services/gemini'
   * 2. Replace generateWithGroq(input) with generateWithGemini(input)
   */

  // 1. Try Groq (Primary - Most reliable free tier)
  try {
    politerMessage = await generateWithGroq(input);
  } catch (error) {
    console.error('Groq API error:', error);
  }

  // 2. Fallback to OpenAI
  if (!politerMessage) {
    try {
      politerMessage = await generateWithOpenAI(input);
    } catch (error) {
      console.error('OpenAI API error:', error);
      return response
        .status(500)
        .json({ error: 'Both AI providers failed. Please try again later.' });
    }
  }

  return response
    .setHeader('Content-Type', 'application/json')
    .status(200)
    .json({ politerMessage: politerMessage?.trim() || '' });
}
