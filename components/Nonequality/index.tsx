"use client";

import { useState, useEffect, useMemo } from "react";

import { useRouter } from "next/navigation";

import * as S from "./styles";
import { SUMMARY, DESCRIPTION, CONCEPT, MEDIA, YOUTUBE_IDS } from "./constant";

const IMG_BASE_URL = "/assets/personal/2023/nonequality/";
export default function About() {
  const [highlightedWord, setHighlightedWord] = useState("");

  const router = useRouter();
  const [introStage, setIntroStage] = useState(0);

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

  return (
    <S.Container>
      <S.Contents>
        <h1>≠ (Nonequality)</h1>
        <h2>2023, Jeanyoon Choi</h2>
        <h2>A Multi-Device Web Artwork</h2>
        <h2>Software: HTML, Next.js, WebSocket, Stable Diffusion, ChatGPT, Youtube API, D3.js, Tone.js</h2>
        <h2>Installation: 4-Channel Screens and Audience's Mobile Interaction</h2>
        <ImgSection imgIndexes={[1, 2, 3]} />

        {SUMMARY.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <VidSection introStage={introStage} />
        <h5>Lorem Ipsum</h5>
        <div
          style={{
            display: "flex",
          }}
        >
          <video
            src="/assets/nonequality/channel2.mp4"
            style={{
              width: "45vw",
              height: "45vh",
            }}
            autoPlay
            controls
          />

          <a
            onClick={() => {
              window.open("https://internetinental.herokuapp.com/nonequality/data-uploader", "_blank");
            }}
            style={{
              width: "45vw",
              height: "45vh",
              cursor: "pointer",
            }}
          >
            <iframe
              src="https://internetinental.herokuapp.com/nonequality/data-uploader?showAddKeywordButton=false"
              style={{
                width: "45vw",
                height: "45vh",
              }}
            />
          </a>
        </div>

        <h1>Artwork in Glance</h1>
        {DESCRIPTION.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <ImgSection imgIndexes={[4, 5, 6]} />

        <h1>Key Philosophical Concepts</h1>
        {CONCEPT.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <ImgSection imgIndexes={[7, 8, 9]} />

        <h1>Medium: Multi-Device Web Artwork (MDWA)</h1>
        {MEDIA.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}
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
      onMouseOver={() => {
        setHovered(true);
        handleWordHovered(word);
      }}
      onMouseOut={() => {
        setTimeout(() => {
          setHovered(false);
          handleWordHoveredCancelled(word);
        }, 3000);
      }}
      style={{
        textDecoration: highlight ? "line-through" : "none",
        color: highlight ? "hsl(0, 100%, 65%)" : "#bbb",
        textShadow: highlight ? "0 0 5px hsl(0, 100, 85%)" : "none",
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

function VidSection({ introStage }: any) {
  return <S.VidSection>{introStage >= 1 && YOUTUBE_IDS.map((id: string, i: number) => <SingleVideo key={i} id={id} />)}</S.VidSection>;
}

function SingleVideo({ id }: any) {
  return (
    <S.SingleVideo>
      <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1`} allow="autoplay" title="Youtube" frameBorder="0" cellSpacing="0" />
    </S.SingleVideo>
  );
}
