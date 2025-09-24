import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle}
  width: 100%;
  position: relative;
  background: #111;
  background-color: #111;
  font-family: "Times New Roman", Times, serif;
  transition: all 0.3s ease-in-out;
`;

export const Wrapper = styled.div<{ $columns?: number }>`
  ${WholeContainer}
  overflow-y: scroll;
  // min-height: ${({ theme }) => theme.windowHeight}px;
  background: #111;
  display: grid;
  grid-row-gap: 0 !important;
  grid-template-columns: ${({ theme, $columns }) =>
    theme.windowWidth > 768 ? "repeat(5, 1fr)" : `repeat(${($columns || 1)}, 1fr)`};
  touch-action: pan-y;

  &::-webkit-scrollbar {
    display: none !important;
    -webkit-appearance: none;
    width: 0 !important;
    height: 0;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
    background-color: transparent;
    outline: none;
  }

  /* width */

  -ms-overflow-style: none;
  scrollbar-width: none !important;
`;

export const SingleEl = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  position: relative;
  background: #111;
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const OverlayShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  box-shadow: inset 0 0 1rem 0.3rem rgba(0, 0, 0, 0.8);
`;

export const Info = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.01);
  backdrop-filter: blur(0.2rem) invert(100%);
  -webkit-backdrop-filter: blur(0.2rem) invert(100%);
  mix-blend-mode: difference;
  color: white;
`;

export const Title = styled.div`
  position: absolute;
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1.5vw" : "4vw")};
  left: ${({ theme }) => (theme.windowWidth > 768 ? "1vw" : "2.5vw")};
  top: ${({ theme }) => (theme.windowWidth > 768 ? "0.5vw" : "1.5vw")};
  width: ${({ theme }) => (theme.windowWidth > 768 ? "18vw" : "45vw")};
  text-align: left;
`;

export const Year = styled.div`
  position: absolute;
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1vw" : "3vw")};
  left: ${({ theme }) => (theme.windowWidth > 768 ? "1vw" : "2.5vw")};
  bottom: ${({ theme }) => (theme.windowWidth > 768 ? "0.5vw" : "1.5vw")};
  width: ${({ theme }) => (theme.windowWidth > 768 ? "18vw" : "45vw")};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
