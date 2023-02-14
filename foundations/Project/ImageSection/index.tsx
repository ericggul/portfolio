import { useState, useEffect, useMemo, useRef } from "react";
import * as S from "./styles";

import useResize from "utils/hooks/useResize";

import Image from "next/image";

export default function ImageSection({ project, isItUpper }: any) {
  const [windowWidth, windowHeight] = useResize();

  const carouselLength = useMemo(() => project.imageURLs.length, [project.imageURLs]);
  const interval = useMemo(() => ((new Date().getMinutes() % 6) + 6) * (isItUpper ? 500 : 250), []);

  const [currentCarousel, setCurrentCarousel] = useState(0);

  useEffect(() => {
    const settingInterval = setInterval(() => {
      if (isItUpper) {
        carouselNextItem();
      } else {
        carouselPrevItem();
      }
    }, interval);

    return () => {
      clearInterval(settingInterval);
    };
  }, [carouselLength, currentCarousel, isItUpper]);

  function carouselNextItem() {
    setCurrentCarousel((idx) => (idx + 1) % carouselLength);
  }

  function carouselPrevItem() {
    setCurrentCarousel((idx) => (idx === 0 ? carouselLength - 1 : (idx - 1) % carouselLength));
  }

  //touch & swipe
  const touchPosRef = useRef(0);
  const mousePosRef = useRef(0);
  function handleTouchStart(ev: any) {
    touchPosRef.current = ev.changedTouches[0].clientX;
  }

  function handleTouchEnd(ev: any) {
    const touchPosX = ev.changedTouches[0].clientX;
    if (touchPosRef.current > touchPosX) {
      carouselNextItem();
    } else {
      carouselPrevItem();
    }
  }

  function handleMouseOver(ev: any) {
    console.log(ev.clientX);
    mousePosRef.current = ev.clientX;
  }

  function handleMouseLeave(ev: any) {
    console.log(ev.clientX);
    const mousePosX = ev.clientX;
    if (mousePosRef.current > mousePosX) {
      console.log(mousePosRef.current, mousePosX);
      carouselNextItem();
    } else {
      carouselPrevItem();
    }
  }

  function handleClick(ev: any) {}

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
      <S.ImgContainer onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} onClick={handleClick}>
        {windowWidth > 600 && (
          <S.Arrow
            style={{
              left: "-4rem",
            }}
          >
            {"<"}
          </S.Arrow>
        )}
        <Image
          draggable={false}
          src={project.land.baseImageURL ? project.land.baseImageURL + project.imageURLs[currentCarousel] : project.imageURLs[0]}
          alt="Portfolio Image"
          layout="fill"
          priority
          objectFit="cover"
        />
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
