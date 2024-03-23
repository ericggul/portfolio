"use client";
import Link from "next/link";

import { useState, useEffect } from "react";
//styles
import * as S from "./styles";

export default function Texts({ texts }: any) {
  console.log(texts);
  return (
    <S.Container>
      <S.Contents>
        <h1>Texts</h1>

        <h5>Texts written by Jeanyoon Choi</h5>

        <S.Items>
          {texts.map((el: any, i: number) => (
            <SingleItem key={i} el={el} />
          ))}
        </S.Items>
      </S.Contents>
    </S.Container>
  );
}

function SingleItem({ el }: any) {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <Link href={`/text/${el.id}`}>
      <S.SingleItem>
        <img
          src={el.imgURL}
          alt={el.title}
          style={{
            opacity: imgLoaded ? 1 : 0,
          }}
          onLoad={() => setImgLoaded(true)}
        />
        {el.title}
        <p suppressHydrationWarning>{el.createdAt.toLocaleString()}</p>
      </S.SingleItem>
    </Link>
  );
}
