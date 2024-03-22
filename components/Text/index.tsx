"use client";
import Link from "next/link";

//styles
import * as S from "./styles";
import { useState, useEffect, useMemo } from "react";

export default function Text({ textData }: any) {
  return (
    <S.Container suppressHydrationWarning>
      {textData && (
        <S.Contents>
          <Link href="/texts">
            <h6>&#x2190; Back to Main</h6>
          </Link>

          <h1>{textData.title}</h1>
          <h4 suppressHydrationWarning>
            {textData.createdAt.toLocaleString()}
            {" | Jeanyoon Choi"}
          </h4>

          {textData.imgURL && <img src={textData.imgURL} alt={textData.title} />}

          <h5>
            Original Text <i>(Pre-LLM)</i>
          </h5>
          {textData.originalText.split("\n").map((el: any, i: number) => (
            <p key={i}>{el}</p>
          ))}

          <h5>
            English Version <i>(LLM-Generated)</i>
          </h5>
          {textData.englishText.split("\n").map((el: any, i: number) => (
            <p key={i}>{el}</p>
          ))}

          <h5>
            Korean Version <i>(LLM-Generated)</i>
          </h5>
          {textData.koreanText.split("\n").map((el: any, i: number) => (
            <p
              key={i}
              style={{
                fontFamily: "Helvetica, sans-serif",
                lineHeight: "2",
              }}
            >
              {el}
            </p>
          ))}

          <h5>Tags</h5>
          <S.Tags>
            {textData.tags.map((tag: string, i: number) => (
              <p key={i}>{tag}</p>
            ))}
          </S.Tags>

          {/* <OtherProjectsSection similarProjects={similarProjects} type={TYPE_CONVERSION[projectData.type] || "Artwork"} /> */}
          <br />
          <br />
          <p>Ⓒ Jeanyoon Choi, 2024</p>
          <br />
          <br />
        </S.Contents>
      )}
    </S.Container>
  );
}
