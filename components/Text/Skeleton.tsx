"use client";

import React from "react";
import styled from "styled-components";
import * as S from "./styles";

const TextPlaceholder = styled(S.SkeletonPlaceholder)`
  height: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;

  &:last-of-type {
    width: 70%;
  }
`;

const ImagePlaceholder = styled(S.SkeletonPlaceholder)`
  width: calc(min(100%, 700px));
  aspect-ratio: 16 / 9;
  margin: 1.5rem 0;
  border-radius: 8px;
`;

export default function TextSkeleton() {
  return (
    <S.Container>
      <S.Contents>
        <S.SkeletonPlaceholder style={{ width: "150px", height: "1rem", marginBottom: "3rem", borderRadius: "4px" }} />

        <TextPlaceholder style={{ width: "80%", height: "1.8rem", marginBottom: "0.5rem" }} />
        <TextPlaceholder style={{ width: "40%", height: "1rem" }} />

        <ImagePlaceholder />

        <TextPlaceholder style={{ width: "200px", height: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }} />
        <TextPlaceholder />
        <TextPlaceholder />
        <TextPlaceholder />

        <TextPlaceholder style={{ width: "250px", height: "1.2rem", marginTop: "2rem", marginBottom: "1rem" }} />
        <TextPlaceholder />
        <TextPlaceholder />
        <TextPlaceholder />
      </S.Contents>
    </S.Container>
  );
}
