"use client";

import React from "react";
import styled from "styled-components";
import * as S from "./styles";

const P = styled(S.SkeletonPlaceholder)`
  height: 1rem;
  margin-bottom: 0.5rem;
  border-radius: 4px;

  &:last-of-type {
    width: 70%;
  }
`;

const ImageGrid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 2.5rem 0;
`;

const ImagePlaceholder = styled(S.SkeletonPlaceholder)`
  width: calc((100vw - 3rem) / 3);
  height: calc(((100vw - 3rem) / 3) * 0.5625);
  margin: 0 0.2rem;
  border-radius: 8px;

  @media (max-width: 768px) {
    width: 100%;
    height: calc((100vw - 3rem) * 0.5625);
    margin: 0.2rem 0;
  }
`;

export default function WorkSkeleton() {
  return (
    <S.Container>
      <S.Contents>
        <S.SkeletonPlaceholder style={{ width: "150px", height: "1rem", marginBottom: "1.5rem", borderRadius: "4px" }} />

        <P style={{ width: "80%", height: "1.8rem", marginTop: "2.5rem", marginBottom: "0.5rem" }} />
        <P style={{ width: "40%", height: "1rem" }} />

        <P style={{ width: "90%", height: "1rem", marginTop: "1.5rem" }} />

        <ImageGrid>
          <ImagePlaceholder />
          <ImagePlaceholder />
          <ImagePlaceholder />
        </ImageGrid>

        <P />
        <P />
        <P />

        <ImageGrid>
          <ImagePlaceholder />
          <ImagePlaceholder />
          <ImagePlaceholder />
        </ImageGrid>
      </S.Contents>
    </S.Container>
  );
}
