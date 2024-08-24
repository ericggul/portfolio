"use client";

import Link from "next/link";

import { useState, useEffect, useMemo } from "react";
import useResize from "@/utils/hooks/useResize";
import { useRouter } from "next/navigation";

import * as S from "./styles";
import { SUMMARY, DESCRIPTION, CONCEPT, TECH } from "./constant";

const IMG_BASE_URL = "/assets/projects/2024/civilisation/";
export default function About() {
  const [highlightedWord, setHighlightedWord] = useState("");

  const router = useRouter();
  const [introStage, setIntroStage] = useState(2);

  useEffect(() => {
    if (introStage === 1) {
      // new audio
      const audio = new Audio("/assets/sound/neins/0.wav");
      audio.play();
      setTimeout(() => {
        setIntroStage(2);
      }, 1000);
    }
  }, [introStage]);

  const [windowWidth, windowHeight] = useResize();

  return (
    <S.Container>
      <S.Contents
        style={{
          opacity: introStage >= 1 ? 1 : 0,
        }}
      >
        <Link href="/works">
          <h6>&#x2190; Back to Main</h6>
        </Link>

        <h1
          style={{
            fontSize: "1.8rem",
          }}
        >
          The Symphony of Civilisation
        </h1>
        <h2>2024, Jeanyoon Choi, Suhyun Lim</h2>
        <h2>A Multi-Device Web Symphony</h2>
        <h2>Software: HTML, Next.js, WebSocket, Midjourney, GLSL, WebRTC, Mobile Accelerometer, Tone.js</h2>
        <h2>Installation: More-than-ten-channels Multi-Device Web Artwork</h2>

        <ImgSection imgIndexes={[1, 2, 3]} />
        {SUMMARY.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        {/* <S.LargeVideo>
          <iframe src={`https://www.youtube.com/embed/6cfdTbTwlUM?autoplay=1&mute=0&loop=1`} allow="autoplay" title="Youtube" frameBorder="0" />

          <h5>Video of Whole Interaction</h5>
        </S.LargeVideo> */}

        <h1>Artwork in a Glance</h1>
        {DESCRIPTION.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <ImgSection imgIndexes={[4, 5, 6]} />

        <h1>Concept</h1>
        {CONCEPT.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}
        <ImgSection imgIndexes={[7, 8, 9]} />

        <h1>Technology Used</h1>
        {TECH.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <h1>Credits</h1>
        <p>Jeanyoon Choi | Artist, Developer</p>
        <p>Suhyun Lim | Artist, Designer</p>
        <p>Dr. Yiyun Kang | Supervisor</p>

        <br />
        <br />
        <br />

        <p>Ⓒ Jeanyoon Choi, 2024</p>
        <br />
        <br />
      </S.Contents>

      <S.Overlay
        style={{
          background: introStage === 0 ? "white" : "radial-gradient(hsla(0, 100%, 50%, 0.5), hsla(0, 100%, 50%, 1))",
          opacity: introStage <= 1 ? 1 : 0,
          pointerEvents: introStage <= 1 ? "all" : "none",
        }}
        onClick={() => setIntroStage((i) => i + 1)}
      >
        <h3>≠</h3>
      </S.Overlay>
    </S.Container>
  );
}

function Paragraph({ text, highlightedWord, setHighlightedWord }: any) {
  return (
    <p>
      {text.split(" ").map((word: string, i: number) => (
        <SingleSpan
          word={word}
          key={i}
          highlightedWord={highlightedWord}
          handleWordHovered={(word: string) => setHighlightedWord(word)}
          handleWordHoveredCancelled={(word: string) => setHighlightedWord("")}
        />
      ))}
    </p>
  );
}

function SingleSpan({ word, highlightedWord, handleWordHovered, handleWordHoveredCancelled }: any) {
  const [hovered, setHovered] = useState(false);
  const highlight = useMemo(() => highlightedWord === word || hovered, [highlightedWord, hovered]);

  return (
    <span
      // onMouseOver={() => {
      //   setHovered(true);
      //   handleWordHovered(word);
      // }}
      // onMouseOut={() => {
      //   setTimeout(() => {
      //     setHovered(false);
      //     handleWordHoveredCancelled(word);
      //   }, 3000);
      // }}
      style={{
        textDecoration: highlight ? "line-through" : "none",
        color: highlight ? "white" : "#bbb",
        textShadow: highlight ? "0 0 5px white" : "none",
      }}
    >
      {word}{" "}
    </span>
  );
}

function ImgSection({ imgIndexes }: any) {
  return (
    <S.ImgSection>
      <img src={`${IMG_BASE_URL}${imgIndexes[0]}.webp`} alt="nonequality" />
      <img src={`${IMG_BASE_URL}${imgIndexes[1]}.webp`} alt="nonequality" />
      <img src={`${IMG_BASE_URL}${imgIndexes[2]}.webp`} alt="nonequality" />
    </S.ImgSection>
  );
}

function SingleVideo({ id }: any) {
  return (
    <S.SingleVideo>
      <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&loop=1`} allow="autoplay" title="Youtube" frameBorder="0" />
    </S.SingleVideo>
  );
}
