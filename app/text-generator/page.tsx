import { TEXT_TO_UPLOAD } from "./constant";

import getChatGPT from "./chatgpt";
import getImage from "./getImage";
import upload from "./upload";

const SYSTEM_TEXT = `An art and technology researcher's professional writing, rewrite in the form of paragraphs`;
const TRANSLATION_TEXT = `Translate this text into the korean.`;

const IMAGE_INSTRUCTION_TEXT = `Create a beautiful, eye-catching, artistic and poetic header image for the blog post with the following contents: \n`;

const NEGATIVE_PROMPT = `Animation, Blurry, Low quality, Cropped, Text, Out of Frame, Poor, Dehydrated, Watermark, Not Attractive`;

export default async function TextPage() {
  const englishText = await getChatGPT({
    system: SYSTEM_TEXT,
    user: TEXT_TO_UPLOAD.text,
  });

  const koreanText = await getChatGPT({
    system: TRANSLATION_TEXT,
    user: englishText,
  });

  ///TO BE RESOLVED: GET IMAGE from STABLE DIFFUSION

  const img = await getImage({
    prompt: IMAGE_INSTRUCTION_TEXT + "Title: " + TEXT_TO_UPLOAD.title + "\n" + englishText,
    negativePrompt: NEGATIVE_PROMPT,
  });
  // console.log(img);

  // const data = {
  //   title: TEXT_TO_UPLOAD.title,
  //   originalText: TEXT_TO_UPLOAD.text,
  //   tags: TEXT_TO_UPLOAD.tags,
  //   englishText: englishText,
  //   koreanText: koreanText,
  //   imgURL: dalle,
  // };

  // await upload({ data });

  return <></>;
}
