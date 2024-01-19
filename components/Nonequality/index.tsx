"use client";

//styles
import * as S from "./styles";

const IMG_BASE_URL = "/assets/personal/2023/nonequality/";
export default function About() {
  return (
    <S.Container>
      <S.Contents>
        <h1>≠ (Nonequality)</h1>
        <h2>2023, Jeanyoon Choi</h2>
        <h2>A Multi-Device Web Artwork</h2>
        <h2>Software: HTML, Next.js, WebSocket, Stable Diffusion, ChatGPT, Youtube API, D3.js, Tone.js</h2>
        <h2>Installation: 4-Channel Screens and Audience's Mobile Interaction</h2>
        <img src={`${IMG_BASE_URL}1.webp`} alt="nonequality" />

        <p>
          ≠ (Nonequality) denotes anything else other than = (Equality). = implies a singular answer, while ≠ encompasses limitless possibilities. However, we often prefer = over ≠, attempting false
          datificiation (Intangible_Ambiguity=Numerical_Value), or uncritical acceptance of algorithmic outcomes (Generative_AI=Truth). Like the overreliance on Recommendation Systems, some accept
          LLM-generated texts to be assuredly true.
        </p>

        <p>
          ≠ (Nonequality) is an interactive Multi-Device Web Art Installation integrating ChatGPT, Stable Diffusion, TTS, and WebSocket, presenting aggregated chaos - Where individual sections adhere
          to logic and algorithms, yet the overall experience emerges as illogical, deconstructed, and decentralised. It exposes the illogicality (≠) within seemingly logical systems (=).
        </p>
      </S.Contents>
    </S.Container>
  );
}
