"use client";
import Link from "next/link";
import useResize from "@/utils/hooks/useResize";

//styles
import * as S from "./styles";

export default function Navigation({ currTab }: any) {
  const [windowWidth, _] = useResize();
  return (
    <S.NavContainer>
      <S.Left>
        <h1>Jeanyoon Choi</h1>
      </S.Left>
      <S.Right>
        <S.Tab $currTab={currTab === "works"}>
          <Link href="/works">Works</Link>
        </S.Tab>
        <S.Tab $currTab={currTab === "about"}>
          <Link href="/about">About</Link>
        </S.Tab>
        <S.Tab $currTab={currTab === "texts"}>
          <Link href="/texts">Texts</Link>
        </S.Tab>
        <S.Tab $currTab={currTab === "fund"}>
          <Link href="https://iba.art/products/%CF%89-resistance" target="_blank">
            Fund
          </Link>
        </S.Tab>
      </S.Right>
    </S.NavContainer>
  );
}
