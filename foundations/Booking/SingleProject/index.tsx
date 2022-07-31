import { useState, useRef, useEffect, useMemo } from "react";

import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

import useDistance from "utils/hooks/useDistance";

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

export default function SingleProject({ project, geolocation, idx }: any) {
  const [visible, setVisible] = useState(false);
  const [move, setMove] = useState(false);
  const domRef = useRef<any>();
  const interval = useMemo(() => getRandom(3, 4.5), []);

  //visible when scrolled
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  //when visible, activate animation
  useEffect(() => {
    if (visible) {
      const intervalFunc = setInterval(() => {
        setMove((move) => !move);
      }, interval * 1000);
      return () => clearInterval(intervalFunc);
    }
  }, [visible, interval]);

  const { distance, permittedStatus } = useDistance({ lat: project.lat, lng: project.lng, currPos: geolocation.pos, permittedStatus: geolocation.permittedStatus });

  //rating digit
  const [ratingDigit, setRatingDigit] = useState(1);
  useEffect(() => {
    const ratingDigitInterval = setInterval(() => {
      setRatingDigit((ratingDigit) => (ratingDigit + 1) % 5);
    }, 2000);
    return () => clearInterval(ratingDigitInterval);
  }, []);

  return (
    <Link href={`/project/${project.title}`}>
      <S.Container ref={domRef} visible={visible} move={move} idx={idx}>
        <S.ImgContainer>
          <Image src={project.land.baseImageURL ? project.land.baseImageURL + project.imageURLs[0] : project.imageURLs[0]} alt="Portfolio Image" layout="fill" objectFit="cover" />
          <S.Land>{project.land.title}</S.Land>
        </S.ImgContainer>
        <S.ContentsContainer>
          <S.Rating>
            <S.RatingStar>
              <Image src={"/assets/images/Booking/star.svg"} alt="Star" layout="fill" />
            </S.RatingStar>
            <S.RatingText>
              {project.rating.toFixed(ratingDigit)}
              <span>
                ({project.ratingCount}
                {"0".repeat(Math.max(ratingDigit - 1, 0))} Rating{"s".repeat(Math.ceil(ratingDigit / 2))})
              </span>
            </S.RatingText>
          </S.Rating>
          <S.ContentsLeft>
            {/* {permittedStatus && <S.Distance>{Math.round(distance / 1000)}km</S.Distance>} */}
            <S.Medium>
              {project.medium} &#x2022; {project.date}
            </S.Medium>
            <S.ShortDescription>{project.shortDescription}</S.ShortDescription>
            <S.Title>{project.title}</S.Title>
          </S.ContentsLeft>
        </S.ContentsContainer>
      </S.Container>
    </Link>
  );
}
