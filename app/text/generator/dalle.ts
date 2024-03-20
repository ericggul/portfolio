import OpenAI from "openai";

// const configuration = new Configuration({
//   apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(configuration);

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

export default async function generateImage(text: any) {
  try {
    const completion = await openai.images.generate({
      model: "dall-e-3",
      prompt: text,
      n: 1,
      size: "1024x1024",
    });

    const result = completion.data[0].url;

    return result;
  } catch (e) {
    console.log(e);
  }
}
