"use client";
import Link from "next/link";
import Image from "next/image";

import useResize from "@/utils/hooks/useResize";
import { useState, useEffect, useMemo } from "react";
//styles
import * as S from "./styles";

export default function Texts({ texts }: any) {
  const [windowWidth, _] = useResize();
  const itemsPerRow = useMemo(() => (windowWidth > 768 ? 3 : 1), [windowWidth]);

  const imgWidth = useMemo(() => (windowWidth > 768 ? windowWidth / 6 : windowWidth / 2), [windowWidth]);

  return (
    <S.Container>
      <S.Contents>
        <S.Items>
          {texts.map((el: any, i: number) => (
            <SingleItem key={i} el={el} isEvenRow={Math.floor(i / itemsPerRow) % 2 === 0} imgWidth={imgWidth} />
          ))}
        </S.Items>
      </S.Contents>
    </S.Container>
  );
}

function SingleItem({ el, isEvenRow, imgWidth }: any) {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Link href={`/text/${el.id}`}>
      <S.SingleItem>
        {isEvenRow && (
          <Image src={el.imgURL} alt={el.title} width={imgWidth} height={imgWidth} />
          // <img
          //   src={el.imgURL}
          //   alt={el.title}
          //   style={{
          //     opacity: imgLoaded ? 1 : 1,
          //   }}
          //   onLoad={() => setImgLoaded(true)}
          // />
        )}

        <S.Inner>
          <div>
            {" "}
            {el.title}
            <br />
          </div>

          <p suppressHydrationWarning>{el.createdAt.toLocaleString()}</p>
        </S.Inner>

        {!isEvenRow && (
          <img
            src={el.imgURL}
            alt={el.title}
            style={{
              opacity: imgLoaded ? 1 : 1,
            }}
            onLoad={() => setImgLoaded(true)}
          />
        )}
      </S.SingleItem>
    </Link>
  );
}
