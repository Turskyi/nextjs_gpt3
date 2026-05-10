export const PROMPT_TEMPLATE = (input: string) => `Transform the following message into a polite and friendly one.

Examples:
Input: I don't have time for this nonsense.
Polite and friendly version: I'm sorry, but I have a lot of things to do right now.

Input: Why don't you do it yourself?
Polite and friendly version: There are quite a few steps that I would have to take to do it, but I am afraid I do not have the capacity at this time. Would you mind doing it yourself, please? I appreciate your cooperation. You are doing a great job and I am sure you can handle it.

Input: This is the worst idea ever.
Polite and friendly version: I appreciate your creativity, but I don't think this is feasible.

Input: ${input}
Polite and friendly version:`;
