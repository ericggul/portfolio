import React, { useEffect, useRef, useState } from "react";
import * as S from "./styles";

import Image from "next/image";
import Link from "next/link";

import useRandomInterval from "utils/hooks/useRandomInterval";

const TEXT = "View Also Sprach Zarathustra";

export default function Recommendation({ recommendedProjects }: any) {
  const ARRAY = ["Related Contents", "Other Projects", "Suggested Projects", "View Also"];

  const [currentHeader, setCurrentHeader] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeader((hd) => (hd + 1) % ARRAY.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer>
        {ARRAY.map((el, i) => (
          <S.Header key={i} delta={i - currentHeader}>
            {el}
          </S.Header>
        ))}
      </S.HeaderContainer>
      <S.Contents>
        {recommendedProjects.map((project: any, i: number) => (
          <Link key={i} href={`/project/${project.title}`}>
            <S.Content key={i}>
              <S.ImgContainer>
                <Image src={project.land.baseImageURL ? project.land.baseImageURL + project.imageURLs[0] : project.imageURLs[0]} alt="Portfolio Image" layout="fill" objectFit="cover" />
              </S.ImgContainer>
              <S.Title>{project.title}</S.Title>
            </S.Content>
          </Link>
        ))}
      </S.Contents>
    </S.Container>
  );
}
