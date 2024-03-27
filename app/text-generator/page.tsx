import { TEXT_TO_UPLOAD } from "./constant";

import getChatGPT from "./chatgpt";
import getImage from "./getImage";
import upload from "./upload";

const SYSTEM_TEXT = `An art and technology researcher's professional writing, rewrite in the form of paragraphs`;
const SYSTEM_TEXT_KO = `이 아방가르드한 스타일의 글을 잘 정제된 한국어 글로 다시 작성하여라: 문체는 일기식으로.`;
const TRANSLATION_TEXT = `Translate this text into the korean.`;

const IMAGE_INSTRUCTION_TEXT = `Create a beautiful, eye-catching, artistic and poetic header image for the blog post with the following contents: \n`;

const NEGATIVE_PROMPT = `Animation, Blurry, Low quality, Cropped, Text, Out of Frame, Poor, Dehydrated, Watermark, Not Attractive`;

export default async function TextPage() {
  // const englishText = await getChatGPT({
  //   system: SYSTEM_TEXT,
  //   user: TEXT_TO_UPLOAD.text,
  // });

  // const koreanText = await getChatGPT({
  //   system: SYSTEM_TEXT_KO,
  //   user: TEXT_TO_UPLOAD.text,
  // });

  // const data = {
  //   title: TEXT_TO_UPLOAD.title,
  //   originalText: TEXT_TO_UPLOAD.text,
  //   tags: TEXT_TO_UPLOAD.tags,
  //   englishText: englishText,
  //   koreanText: koreanText,
  // };

  // await upload({ data });

  return <></>;
}
