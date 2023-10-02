// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  const input = req.query.prompt;

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
  res.status(200).json({ politerMessage });
}
