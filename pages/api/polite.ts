import type { NextApiRequest, NextApiResponse } from 'next';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

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
  } else if (input.length > 300) {
    return response.status(400).json({
      error: 'Sorry, current limit is 300 characters per request. へ‿(ツ)‿ㄏ',
    });
  } else {
    const completion = await openai.createCompletion({
      model: 'gpt-3.5-turbo-instruct',
      prompt: `Transform the following message into a polite and friendly one.\n
      Examples:\n
      Input: I don't have time for this nonsense.\n
      Polite and friendly version: I'm sorry, but I have a lot of things to do right now.\n
      \n
      Input: Why don't you do it yourself?\n
      Polite and friendly version: There are quite a few steps that I would have to take to do it, but I am afraid I do not have the capacity at this time. Would you mind doing it yourself, please? I appreciate your cooperation. You are doing a great job and I am sure you can handle it.\n
      \n
      Input: This is the worst idea ever.\n
      Polite and friendly version: I appreciate your creativity, but I don't think this is feasible.\n
      \n
      Input: ${input}\n
      Polite and friendly version:`,
      max_tokens: 500,
      temperature: 1,
      presence_penalty: 0,
      frequency_penalty: 0,
    });

    const politerMessage = completion.data.choices[0].text;
    return response.setHeader("Content-Type", "application/json").status(200).json({ politerMessage });
  }
}
