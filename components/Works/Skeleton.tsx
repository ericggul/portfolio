"use client";

import React from "react";
import styled, { keyframes } from "styled-components";

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

const SkeletonPlaceholder = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #333;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.1) 20%,
      rgba(255, 255, 255, 0.3) 60%,
      rgba(255, 255, 255, 0)
    );
    animation: ${shimmer} 2s infinite;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  background: #111;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: calc(100vh - 4.5rem);
  background: #111;
  display: grid;
  grid-row-gap: 0 !important;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const GridPlaceholder = styled(SkeletonPlaceholder)`
  width: 100%;
  aspect-ratio: 16 / 9;
`;

export default function WorksSkeleton() {
  return (
    <Container>
      <Wrapper>
        {new Array(15).fill(0).map((_, i) => (
          <GridPlaceholder key={i} />
        ))}
      </Wrapper>
    </Container>
  );
}
