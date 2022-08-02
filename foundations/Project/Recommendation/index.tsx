import React, { useRef, useState } from "react";
import * as S from "./styles";

import Image from "next/image";
import Link from "next/link";

import useRandomInterval from "utils/hooks/useRandomInterval";

const TEXT = "View Also Sprach Zarathustra";

export default function Recommendation({ recommendedProjects }: any) {
  return (
    <S.Container>
      <S.Header>View Other Projects</S.Header>
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
