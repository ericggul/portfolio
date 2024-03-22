import { TEXT_TO_UPLOAD } from "./constant";

import getChatGPT from "./chatgpt";
import getDalle from "./dalle";
import upload from "./upload";

const SYSTEM_TEXT = `An art and technology researcher's professional writing, rewrite in the form of paragraphs`;
const TRANSLATION_TEXT = `Translate this text into the korean.`;

const IMAGE_INSTRUCTION_TEXT = `Draw an image for the blog header suitable for the following blog contents. Bright, Colourful, High-Quality, Artistic, High-Fidelity, Not hand-skteched. \n`;

export default async function TextPage() {
  // const englishText = await getChatGPT({
  //   system: SYSTEM_TEXT,
  //   user: TEXT_TO_UPLOAD.text,
  // });

  // const koreanText = await getChatGPT({
  //   system: TRANSLATION_TEXT,
  //   user: englishText,
  // });

  // const dalle = await getDalle(IMAGE_INSTRUCTION_TEXT + TEXT_TO_UPLOAD.text);
  // console.log(englishText, koreanText, dalle);

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
