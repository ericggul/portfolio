"use client";
import { useState, useMemo, useEffect } from "react";
import useResize from "@/utils/hooks/useResize";

import Link from "next/link";
import { useRouter } from "next/navigation";

//
//styles
import * as S from "./styles";
import { toast, Toast } from "loplat-ui";
import { getRandom } from "@/utils/functions/getRandom";

export default function Project({ allImages }: any) {
  console.log(allImages);
  return (
    <S.Container>
      <S.Wrapper>
        {allImages.map((el: any, i: number) => (
          <SingleEl el={el} key={i} />
        ))}
      </S.Wrapper>
    </S.Container>
  );
}

function SingleEl({ el }: any) {
  const [hovered, setHovered] = useState(false);

  return (
    <S.SingleEl onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      <img src={el.url} alt={el.title} />

      <S.Info
        style={{
          opacity: hovered ? 1 : 0,
        }}
      >
        <S.Title>{el.title}</S.Title>

        <S.Year>
          <p>{el.type}</p>

          <p>{el.year}</p>
        </S.Year>
      </S.Info>

      <S.OverlayShadow />
    </S.SingleEl>
  );
}
