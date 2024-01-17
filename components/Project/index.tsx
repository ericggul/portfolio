"use client";
import React, { useState, useMemo, useEffect, use } from "react";
import useResize from "@/utils/hooks/useResize";
import useRandomInterval from "@/utils/hooks/useRandomInterval";

//styles
import * as S from "./styles";

const getRandomFromArr = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

export default function Project({ allImages }: any) {
  const [newImages, setNewImages] = useState<any>([]);
  const [shuffledImagesArray, setShuffledImagesArray] = useState<any>([]);

  useEffect(() => {
    setShuffledImagesArray((prev: any) => {
      const newImages = [];
      const images = [...prev];
      for (let i = 0; i < 80; i++) {
        const newImage = getRandomFromArr(allImages);
        images[i] = newImage;
        newImages.push(i);
      }
      setNewImages(newImages);
      return images;
    });
  }, [allImages]);

  useRandomInterval(
    //add new images
    () => {
      setShuffledImagesArray((prev: any) => {
        const newImages = [...prev];
        //add one new image in random location
        const newImage = getRandomFromArr(allImages);
        const randomIndex = Math.floor(Math.random() * newImages.length);
        newImages[randomIndex] = newImage;
        newImages.push(randomIndex);
        return newImages;
      });
    },
    500,
    2000
  );

  console.log(shuffledImagesArray, shuffledImagesArray.length);

  // Use useMemo to memoize the shuffledImagesArray
  const memorisedImages = useMemo(() => shuffledImagesArray.map((el: any, i: number) => <SingleEl el={el} key={i} />), [shuffledImagesArray, newImages]);

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
