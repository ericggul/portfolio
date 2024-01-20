"use client";
import React, { useState, useMemo, useEffect, use } from "react";
import Link from "next/link";

//styles
import * as S from "./styles";

export default function Project({ allImages }: any) {
  const [shuffledImagesArray, setShuffledImagesArray] = useState<any>([]);

  useEffect(() => {
    loadAllImages();
  }, [allImages]);

  async function loadAllImages() {
    for (const element of allImages) {
      await loadImage(element);
    }
  }

  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

  async function loadImage(el: any) {
    const img = new Image();
    img.src = el.url;
    img.onload = () => {
      console.log("28");
      setShuffledImagesArray(
        (
          prev: any //upload except for redundant images
        ) => (prev.find((ele: any) => ele && ele.url === el.url) ? prev : [...prev, el])
      );
    };

    await delay(250);
  }

  // Use useMemo to memoize the shuffledImagesArray
  const memorisedImages = useMemo(() => shuffledImagesArray.map((el: any, i: number) => <SingleEl el={el} key={i} />), [shuffledImagesArray]);

  return (
    <S.Container>
      <S.Wrapper>
        {memorisedImages}

        {new Array(20).fill(null).map((_, i) => (
          <SingleEl key={i} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

const SingleEl = React.memo(({ el }: any) => {
  const [hovered, setHovered] = useState(false);
  const [showedEl, setShowedEl] = useState<any>(null);
  const [change, setChange] = useState(false);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
    if (!el) return;
    setChange(true);
    setAppear(false);
    //after 1s, set change to false
    const timeout = setTimeout(() => {
      setChange(false);
      setHovered(false);
      setShowedEl(el);
    }, 300);
    return () => clearTimeout(timeout);
  }, [el]);

  const linkTo = useMemo(() => (showedEl ? showedEl.mdxOrSeperateLink || `/works/${showedEl.id}` : "/works"), [showedEl]);

  return (
    <Link href={linkTo} target={linkTo.includes("http") || linkTo.includes("https") ? "_blank" : undefined}>
      <S.SingleEl
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          // transform: change || !appear ? "scale(0)" : "scale(1)",
          opacity: change || !appear ? 0 : 1,
        }}
      >
        {showedEl && (
          <>
            {showedEl.url && (
              <img
                onLoad={() => setAppear(true)}
                // loading="lazy"

                src={showedEl.url}
                alt={showedEl.title}
              />
            )}
            <S.Info
              style={{
                opacity: hovered ? 1 : 0,
              }}
            >
              <S.Title>{showedEl.title}</S.Title>
              <S.Year>
                <p>{showedEl.type}</p>
                <p>{showedEl.year}</p>
              </S.Year>
            </S.Info>

            <S.OverlayShadow />
          </>
        )}
      </S.SingleEl>
    </Link>
  );
});
