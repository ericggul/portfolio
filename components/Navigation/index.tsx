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
        <Link href="/works">
          <h1>Jeanyoon Choi</h1>
        </Link>
      </S.Left>
      <S.Right>
        {currTab !== "works" && <S.Tab $currTab={currTab === "works"}>
          <Link href="/works">Works</Link>
        </S.Tab>}
        {currTab !== "about" && <S.Tab $currTab={currTab === "about"}>
          <Link href="/about">About</Link>
        </S.Tab>}
        {currTab !== "texts" && <S.Tab $currTab={currTab === "texts"}>
          <Link href="/texts">Texts</Link>
        </S.Tab>}
        {currTab !== "lab" && <S.Tab $currTab={currTab === "lab"}>
          <Link href="https://www.xdlab.net/" target="_blank">
            XD lab
          </Link>
        </S.Tab>}
      </S.Right>
    </S.NavContainer>
  );
}
