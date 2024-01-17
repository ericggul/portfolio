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
          <S.SingleEl key={i}>
            <img src={el.url} alt={el.title} />
            <S.OverlayShadow />
          </S.SingleEl>
        ))}
      </S.Wrapper>
    </S.Container>
  );
}
