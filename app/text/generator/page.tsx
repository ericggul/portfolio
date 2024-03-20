import Text from "@/components/Text";
import { TEXT1 } from "./constant";
import getChatGPT from "./chatgpt";
import getDalle from "./dalle";

const SYSTEM_TEXT = `An art and technology researcher's professional writing, rewrite in the form of paragraphs`;
const TRANSLATION_TEXT = `Translate this text into the korean.`;

const IMAGE_INSTRUCTION_TEXT = `Draw an image for the blog header suitable for the following blog contents. Bright, Colourful, High-Quality, Artistic, High-Fidelity, Not hand-skteched. \n`;
const SAMPLE_TEXT = `As an art and technology researcher, the evolution of my concepts is a continuous cycle. I find myself reflecting on past ideas, some of which now seem naive, yet they were stepping stones to my current thought processes. The connections built over time create an intricate network of innovation that constantly changes and grows.

To keep pace with this constant mental evolution, traditional note taking isn’t enough. Indeed, it serves as a recording medium, but it doesn’t quite capture the depth and breadth of my thought-waves. This is why I resort to writing, despite its differing nature from note-taking, writing allows me to encapsulate my present thinking more accurately and gives me a chance to revisit and refine my ideas in the future.

Considering the fast-paced nature of my research, however, I can't spend too much time dwelling on writing. My writing style incorporates an avant-garde digital form. I pursue rapid skim-writing, filled with grammatical inaccuracies but rich in raw, unfiltered ideas. These "errors" are not mistakes but rather an essence of originality and authenticity. 

To refine these quicksilver flashes of inspiration, I use artificial intelligence, specifically ChatGPT. It adds necessary ‘flesh’ to my rudimentary ‘bone’ structures of ideas, filling the gaps and formatting them into universally readable and coherent content. In addition, I use it to translate my work into Korean, thereby extending my reach to a variety of audiences. `;

export default async function TextPage() {
  // const englishText = await getChatGPT({
  //   system: SYSTEM_TEXT,
  //   user: TEXT1,
  // });

  // const koreanText = await getChatGPT({
  //   system: TRANSLATION_TEXT,
  //   user: englishText,
  // });

  // const dalle = await getDalle(IMAGE_INSTRUCTION_TEXT + TEXT1);
  // console.log(englishText, koreanText, dalle);

  return (
    <>
      <Text />
    </>
  );
}
