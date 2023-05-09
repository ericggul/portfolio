import * as S from "./styles";
import Image from "next/image";
import { useEffect } from "react";

export default function BackToTop() {
  return (
    <S.Wrapper onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
      <Image src="/assets/images/ProjectList/chevron-circle-up.svg" alt="Back To Top" layout="fill" objectFit="cover" />
    </S.Wrapper>
  );
}
