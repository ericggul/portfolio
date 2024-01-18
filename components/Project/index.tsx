"use client";
import React, { useState, useMemo, useEffect, use } from "react";

//styles
import * as S from "./styles";

const getRandomFromArr = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

export default function Project({ allImages }: any) {
  const [newImages, setNewImages] = useState<any>([]);
  const [shuffledImagesArray, setShuffledImagesArray] = useState<any>([]);

  useEffect(() => {
    console.log(allImages);
    allImages.map((el: any) => {
      const img = new Image();
      img.src = el.url;
      img.onload = () => {
        setShuffledImagesArray(
          (
            prev: any //upload except for redundant images
          ) => (prev.find((ele: any) => ele.url === el.url) ? prev : [...prev, el])
        );
      };
    });
  }, [allImages]);

  // Use useMemo to memoize the shuffledImagesArray
  const memorisedImages = useMemo(() => shuffledImagesArray.map((el: any, i: number) => <SingleEl el={el} key={i} />), [shuffledImagesArray]);

  return (
    <S.Container>
      <S.Wrapper>{memorisedImages}</S.Wrapper>
    </S.Container>
  );
}

const SingleEl = React.memo(({ el }: any) => {
  const [hovered, setHovered] = useState(false);
  const [showedEl, setShowedEl] = useState<any>(null);
  const [change, setChange] = useState(true);
  const [appear, setAppear] = useState(false);

  useEffect(() => {
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

  return (
    <>
      {showedEl && (
        <S.SingleEl
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            transform: change || !appear ? "scale(0)" : "scale(1)",
          }}
        >
          {showedEl.url && <img onLoad={() => setAppear(true)} loading="lazy" src={showedEl.url} alt={showedEl.title} />}
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
        </S.SingleEl>
      )}
    </>
  );
});
