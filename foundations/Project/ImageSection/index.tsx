import { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Image from "next/image";

export default function ImageSection({ project, isItUpper }: any) {
  const carouselLength = useMemo(() => project.imageURLs.length, [project.imageURLs]);
  const interval = useMemo(() => ((new Date().getMinutes() % 6) + 6) * (isItUpper ? 500 : 250), []);

  const [currentCarousel, setCurrentCarousel] = useState(0);

  useEffect(() => {
    const settingInterval = setInterval(() => {
      if (isItUpper) {
        setCurrentCarousel((idx) => (idx + 1) % carouselLength);
      } else {
        setCurrentCarousel((idx) => (idx === 0 ? carouselLength - 1 : (idx - 1) % carouselLength));
      }
    }, interval);

    return () => {
      clearInterval(settingInterval);
    };
  }, [carouselLength, currentCarousel, isItUpper]);

  //touch & swipe
  const [prevTouchPosX, setPrevTocuhPosX] = useState(0);
  function handleTouchStart(ev: any) {
    setPrevTocuhPosX(ev.changedTouches[0].clientX);
  }

  function handleTouchEnd(ev: any) {
    const touchPosX = ev.changedTouches[0].clientX;
    if (prevTouchPosX > touchPosX) {
      setCurrentCarousel((idx) => (idx === 0 ? carouselLength - 1 : (idx - 1) % carouselLength));
    } else {
      setCurrentCarousel((idx) => (idx + 1) % carouselLength);
    }
  }

  return (
    <S.ImgSection>
      {!isItUpper && (
        <S.Dots>
          {Array(carouselLength)
            .fill(0)
            .map((_, i) => (
              <S.Dot key={i} currentImage={i === currentCarousel} onClick={() => setCurrentCarousel(i)} />
            ))}
        </S.Dots>
      )}
      <S.ImgContainer onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
        <Image src={project.land.baseImageURL ? project.land.baseImageURL + project.imageURLs[currentCarousel] : project.imageURLs[0]} alt="Portfolio Image" layout="fill" priority objectFit="cover" />
      </S.ImgContainer>
      {isItUpper && (
        <S.Dots>
          {Array(carouselLength)
            .fill(0)
            .map((_, i) => (
              <S.Dot key={i} currentImage={i === currentCarousel} onClick={() => setCurrentCarousel(i)} />
            ))}
        </S.Dots>
      )}
    </S.ImgSection>
  );
}
