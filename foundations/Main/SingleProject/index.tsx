import { useState, useRef, useEffect, useMemo } from "react";

import * as S from "./styles";
import Image from "next/image";
import Link from "next/link";

import { getRandom } from "utils/functions/getRandom";

export default function SingleProject({ project, idx }: any) {
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

  //rating digit
  const [ratingDigit, setRatingDigit] = useState(1);
  useEffect(() => {
    const ratingDigitInterval = setInterval(() => {
      setRatingDigit((ratingDigit) => (ratingDigit + 1) % 3);
    }, 3000);
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
                {"0".repeat(Math.max(ratingDigit - 1, 0))} Ratings)
              </span>
            </S.RatingText>
          </S.Rating>
          <S.ContentsLeft>
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