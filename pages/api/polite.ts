import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse,
) {
  const input = request.query.prompt?.toString();

  if (!input) {
    return response.status(400).json({ error: "Please provide a prompt query  ಠ_ಠ" });
  } else if (input.length < 5) {
    return response.status(400).json({ error: "( ͡° ͜ʖ ͡°) Prompt too short" });
  } else if (input.length > 300) {
    return response.status(400).json({ error: "Sorry, current limit is 300 characters per request. へ‿(ツ)‿ㄏ" });
  } else {
    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Transform the following message into a polite and friendly one.\n
      Input: ${input}\n
      Polite and friendly version:`,
      max_tokens: 500,
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    });

    const politerMessage = completion.data.choices[0].text;
    return response.status(200).json({ politerMessage });
  }
}
