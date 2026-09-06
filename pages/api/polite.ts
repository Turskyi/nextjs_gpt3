import type { NextApiRequest, NextApiResponse } from 'next';
import { INPUT_MAX_LENGTH } from '../../constants';
import { generateWithGroq, GROQ_MODEL } from '../../services/groq';
import { generateWithMistral, MISTRAL_MODEL } from '../../services/mistral';
import { generateWithGemini, GEMINI_MODEL } from '../../services/gemini';

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
  let provider: string | undefined;
  let model: string | undefined;

  /**
   * AI PROVIDER SELECTION
   *
   * Current Primary: Groq
   * Primary Fallback: Mistral (Mistral Small)
   * Secondary Fallback: Gemini (Gemini 3.5 Flash Lite)
   */

  // 1. Try Groq (Primary - Most reliable free tier)
  try {
    politerMessage = await generateWithGroq(input);
    provider = 'groq';
    model = GROQ_MODEL;
  } catch (error) {
    console.error('Groq API error:', error);
  }

  // 2. Fallback to Mistral
  if (!politerMessage) {
    try {
      politerMessage = await generateWithMistral(input);
      provider = 'mistral';
      model = MISTRAL_MODEL;
    } catch (error) {
      console.error('Mistral API error:', error);
    }
  }

  // 3. Last Resort: Gemini
  if (!politerMessage) {
    try {
      politerMessage = await generateWithGemini(input);
      provider = 'gemini';
      model = GEMINI_MODEL;
    } catch (error) {
      console.error('Gemini API error:', error);
      return response
        .status(500)
        .json({ error: 'All AI providers failed. Please try again later.' });
    }
  }

  return response
    .setHeader('Content-Type', 'application/json')
    .status(200)
    .json({
      politerMessage: politerMessage?.trim() || '',
      provider,
      model,
    });
}
