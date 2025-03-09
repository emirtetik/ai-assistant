// import { openai } from "./baseService";

// export const getOpenAIResponse = async (prompt: string): Promise<string> => {
//     const response = await openai.post('completions', {
//       model: 'gpt-3.5-turbo-0125',
//       prompt: prompt,
//       max_tokens: 150,
//       temperature: 0.7,
//     });
//     console.log('response', response.data)
//     console.log('choices', response.data.choices)
//     return response.data.choices[0].text.trim();
//   };