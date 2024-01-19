"use client";

import { useState, useEffect, useMemo } from "react";
import useResize from "@/utils/hooks/useResize";
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

  const [windowWidth, windowHeight] = useResize();

  return (
    <S.Container>
      <S.Contents
        style={{
          opacity: introStage >= 1 ? 1 : 0,
        }}
      >
        <h1>≠ (Nonequality)</h1>
        <h2>2023, Jeanyoon Choi</h2>
        <h2>A Multi-Device Web Artwork</h2>
        <h2>Software: HTML, Next.js, WebSocket, Stable Diffusion, ChatGPT, Youtube API, D3.js, Tone.js</h2>
        <h2>Installation: 4-Channel Screens and Audience's Mobile Interaction</h2>
        <h2>
          View Artwork Online:
          <a
            href="https://internetinental.herokuapp.com/nonequality"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "underline",
              marginLeft: ".4rem",
            }}
            onClick={() => {
              window.alert("Note: You might need more than two high-performing devices to experience the artwork. You should access all the four links via Google Chrome.");
            }}
          >
            LINK
          </a>
        </h2>
        <ImgSection imgIndexes={[1, 2, 3]} />
        <h5>Snapshots of ≠</h5>

        {SUMMARY.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <VidSection introStage={introStage} />
        <h5>Videos showing Iterations of ≠ over time, specifically focusing on the ChatGPT-based conversation channels</h5>

        <h1>Artwork in a Glance</h1>
        {DESCRIPTION.slice(0, 2).map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <ImgSection imgIndexes={[16, 12, 15]} />
        <h5>
          Left: Initial Display of Equations. Middle and Right: Third and Fourth Channel engaged in real-time conversation, with Fourth Channel replying 'Ja' to whichever ChatGPT generates on the
          Third Channel.
        </h5>

        {DESCRIPTION.slice(2, 3).map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <S.RhizomeSection>
          <iframe
            src={`https://internetinental.herokuapp.com/nonequality/data-uploader`}
            style={{
              margin: "0 auto",
              width: "100%",
              height: "65vh",
            }}
          />

          <h5>Rhizomatic Database displaying the hypertext relationship between keywords. Developed using D3.js</h5>
        </S.RhizomeSection>

        {DESCRIPTION.slice(3).map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <ImgSection imgIndexes={[4, 5, 6]} />

        <h5>
          Later stage of Interaction. Left and Right: Engaged in chaotic aggregated real-time conversations with reptitive 'Nein's. Middle: Visualisation of Rhizomatic Database, which also changes in
          real-time based on the latest given clicked keyword.
        </h5>

        <h1>Key Philosophical Concepts</h1>
        {CONCEPT.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <ImgSection imgIndexes={[7, 8, 9]} />

        <h5>Installation views of ≠.</h5>

        <h1>Medium: Multi-Device Web Artwork (MDWA)</h1>
        {MEDIA.map((s, i) => (
          <Paragraph key={i} text={s} highlightedWord={highlightedWord} setHighlightedWord={setHighlightedWord} />
        ))}

        <h1>Past Exhibitions</h1>
        <p>Sep 2023 | Ars Electronica 2023, "Who Owns the Truth?", Linz, Austria</p>
        <p>Nov 2023 | Some Facts at Midnight, Studio Motif, Seoul, South Korea</p>
        <p>Nov 2023 | Beyond Binary: Exploring life beyond data, Monash University (Virtual), Australia</p>
        <p>Oct 2023 | Coding Creativity, Hera Gallery, Rhode Island, United States</p>
        <p>Jul 2023 | Beyond a priori, Seasons Gallery, London, United Kingdom</p>
        <p>Jul 2023 | HYPERSPECTRAL, PhotoAccess, Manuka, Australia</p>
        <p>Jul 2023 | COUNTERPOINT, Royal College of Art, London, United Kingdom</p>
        <h1>Experience the Web Artwork</h1>
        <h5>Note: You might need more than two high-performing devices to experience the artwork. You should access all the four links via Google Chrome.</h5>

        {new Array(4).fill(0).map((_, i) => (
          <a
            href={`https://internetinental.herokuapp.com/nonequality/screen?screenIdx=${i}`}
            target="_blank"
            style={{
              color: "white",
              textDecoration: "underline",
              marginRight: ".4rem",
              marginTop: "-.5rem",
            }}
            key={i}
          >
            Channel {i + 1}
          </a>
        ))}
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

function VidSection({ introStage }: any) {
  return <S.VidSection>{introStage >= 1 && YOUTUBE_IDS.map((id: string, i: number) => <SingleVideo key={i} id={id} />)}</S.VidSection>;
}

function SingleVideo({ id }: any) {
  return (
    <S.SingleVideo>
      <iframe src={`https://www.youtube.com/embed/${id}?autoplay=1&mute=0&loop=1`} allow="autoplay" title="Youtube" frameBorder="0" />
    </S.SingleVideo>
  );
}
