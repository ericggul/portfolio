import axios from "axios";

export default async function getChatGPT(texts: any) {
  try {
    console.log(texts);
    const completion = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-4",
        messages: [
          { role: "system", content: texts.system },
          { role: "user", content: texts.user },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
        },
      }
    );

    const result = completion.data.choices[0].message.content;

    return result;
  } catch (e) {
    console.log(e);
  }
}
