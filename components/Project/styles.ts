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
  background: black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const SingleEl = styled.div`
  width: ${({ theme }) => (theme.windowWidth > 768 ? "20vw" : "33.333vw")};
  height: ${({ theme }) => (theme.windowWidth > 768 ? "11.25vw" : "18.75vw")};
  position: relative;
  background: black;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

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
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1.5vw" : "3.5vw")};
  left: ${({ theme }) => (theme.windowWidth > 768 ? "1vw" : "1.5vw")};
  top: ${({ theme }) => (theme.windowWidth > 768 ? "0.5vw" : "1vw")};
  width: ${({ theme }) => (theme.windowWidth > 768 ? "18vw" : "30vw")};
  text-align: left;
`;

export const Year = styled.div`
  position: absolute;
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1vw" : "2vw")};
  left: ${({ theme }) => (theme.windowWidth > 768 ? "1vw" : "1.5vw")};
  bottom: ${({ theme }) => (theme.windowWidth > 768 ? "0.5vw" : "1vw")};
  width: ${({ theme }) => (theme.windowWidth > 768 ? "18vw" : "30vw")};

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
