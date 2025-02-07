import { TEXT_TO_UPLOAD } from "./constant";

import getChatGPT from "./chatgpt";
import getImage from "./getImage";
import upload from "./upload";

const SYSTEM_TEXT = `Rewrite this essay draft in an art and technology style - DO NOT edit the contents, just rewrite the style.`;
const SYSTEM_TEXT_KO = `이 글을 예술과 기술의 스타일로 다시 작성하여라 - 내용은 그대로 두고 스타일만 바꾸어라.`;
// const TRANSLATION_TEXT = `Translate this text into the korean.`;

// const IMAGE_INSTRUCTION_TEXT = `Create a beautiful, eye-catching, artistic and poetic header image for the blog post with the following contents: \n`;

// const NEGATIVE_PROMPT = `Animation, Blurry, Low quality, Cropped, Text, Out of Frame, Poor, Dehydrated, Watermark, Not Attractive`;

export default async function TextPage() {
  try {
    const englishText = await getChatGPT({
      system: SYSTEM_TEXT,
      user: TEXT_TO_UPLOAD.text,
    });

    const koreanText = await getChatGPT({
      system: SYSTEM_TEXT_KO,
      user: TEXT_TO_UPLOAD.text,
    });

    // Generate image based on the title and first paragraph
    const imagePrompt = `${TEXT_TO_UPLOAD.title}\n${TEXT_TO_UPLOAD.text.split("\n")[0]}`;
    const imageUrl = await getImage(imagePrompt);

    const data = {
      title: TEXT_TO_UPLOAD.title,
      originalText: TEXT_TO_UPLOAD.text,
      tags: TEXT_TO_UPLOAD.tags,
      englishText: englishText,
      koreanText: koreanText,
      imgURL: imageUrl, // Add the generated image URL
    };

    const result = await upload({ data });

    return <div>Upload completed successfully!</div>;
  } catch (error) {
    console.error("Error in TextPage:", error);
    return <div>Error occurred during upload</div>;
  }
}
