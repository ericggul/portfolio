"use client";

import { useState, useEffect } from "react";

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
        <ImgSection />
        <p>
          ≠ (Nonequality) denotes anything else other than = (Equality). = implies a singular answer, while ≠ encompasses limitless possibilities. However, we often prefer = over ≠, attempting false
          datificiation (Intangible_Ambiguity=Numerical_Value), or uncritical acceptance of algorithmic outcomes (Generative_AI=Truth). Like the overreliance on Recommendation Systems, some accept
          LLM-generated texts to be assuredly true.
        </p>

        <p>
          ≠ (Nonequality) is an interactive Multi-Device Web Art Installation integrating ChatGPT, Stable Diffusion, TTS, and WebSocket, presenting aggregated chaos - Where individual sections adhere
          to logic and algorithms, yet the overall experience emerges as illogical, deconstructed, and decentralised. It exposes the illogicality (≠) within seemingly logical systems (=).
        </p>
        <VidSection />

        <iframe
          src="https://internetinental.herokuapp.com/nonequality/data-uploader"
          style={{
            width: "100vw",
            height: "100vh",
          }}
        />
      </S.Contents>
    </S.Container>
  );
}

function ImgSection() {
  const [imgIndexes, setImgIndexes] = useState([1, 3, 5, 7, 9]);

  useEffect(() => {
    const interval = setInterval(randomise, 500);
    return () => clearInterval(interval);
  }, []);

  function randomise() {
    //randomise imgindexes

    setImgIndexes((idxs) =>
      idxs.map((imgIndex) => {
        const random = Math.random();
        if (random < 0.5) {
          return imgIndex;
        } else {
          return (imgIndex % 15) + 1;
        }
      })
    );
  }

  return (
    <S.ImgSection>
      <img src={`${IMG_BASE_URL}${imgIndexes[0]}.webp`} alt="nonequality" />
      <img src={`${IMG_BASE_URL}${imgIndexes[1]}.webp`} alt="nonequality" />
      <img src={`${IMG_BASE_URL}${imgIndexes[2]}.webp`} alt="nonequality" />
      <img src={`${IMG_BASE_URL}${imgIndexes[3]}.webp`} alt="nonequality" />
      <img src={`${IMG_BASE_URL}${imgIndexes[4]}.webp`} alt="nonequality" />
    </S.ImgSection>
  );
}

function VidSection() {
  return (
    <S.VidSection>
      <iframe src="https://www.youtube.com/embed/xTHepagctI8?si=3Mr_4rDCc24UNQcX" allow="autoplay" title="Youtube" frameBorder="0" border="0" cellSpacing="0"></iframe>
    </S.VidSection>
  );
}
