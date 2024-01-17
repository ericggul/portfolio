import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle}
  width: 100%;
  position: relative;
  background: black;
  font-family: "Times New Roman", Times, serif;
  transition: all 0.3s ease-in-out;
`;

export const Wrapper = styled.div`
  ${WholeContainer}
  overflow-y: scroll;
  min-height: ${({ theme }) => theme.windowHeight}px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const SingleEl = styled.div`
  width: 20vw;
  height: 11.25vw;
  position: relative;
  background: black;
  transition: transform 0.3s ease-in-out;

  @keyframes init-appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: init-appear 0.3s ease-in-out both;

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
  font-size: 1.5vw;
  left: 1vw;
  top: 0.5vw;
  width: 18vw;
  text-align: left;
`;

export const Year = styled.div`
  position: absolute;
  font-size: 1vw;
  left: 1vw;
  bottom: 0.5vw;
  width: 18vw;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
