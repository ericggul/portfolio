import React, { useRef, useEffect } from "react";
import * as S from "./styles";

import Image from "next/image";
import Link from "next/link";

export default function Recommendation({ recommendedProjects }: any) {
  const headerRef = useRef();

  useEffect(() => {
    if (headerRef && headerRef.current) {
      headerRef.current.innerText = `View Also Sprach Zarathustra`;
    }
  }, [headerRef]);

  return (
    <S.Container>
      <S.Header ref={headerRef} />
      <S.Contents>
        {recommendedProjects.map((project: any, i: number) => (
          <Link key={i} href={`/project/${project.title}`}>
            <S.Content>
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
