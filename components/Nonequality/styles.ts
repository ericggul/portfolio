import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  overflow-y: scroll !important;
  background: #111;
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
`;

export const Overlay = styled.div`
  ${WholeContainer}
  position: fixed;
  ${FlexCenterStyle}
  font-size: 15vw;
  background: white;
  cursor: pointer;
  transition: opacity 1s ease-in-out;

  h3 {
    color: black;
    font-weight: 900;
  }
`;

export const Contents = styled.div`
  width: calc(100vw - 3rem);
  height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
  padding-bottom: 5rem;
  margin-left: 1.5rem;
  overflow-y: scroll !important;
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1rem" : ".8rem")};
  font-weight: 300;

  color: #bbb;

  iframe {
    border: none;
    margin: 2.5rem 0;
  }

  p {
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 1.4rem;
    font-weight: normal;
    text-shadow: 0 0 1px #fff;
    margin: 1.5rem 0;
    color: #fff;
  }

  h2 {
    font-size: 1rem;
    font-weight: normal;
  }
  img {
    width: 100%;
    margin: 1.5rem 0;
  }

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

export const ImgSection = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 1.5rem 0;

  img {
    width: calc((100vw - 3rem) / 3);
    height: calc(((100vw - 3rem) / 3) * 0.5625);
    object-fit: cover;
  }
`;

export const CV = styled.div`
  cursor: pointer;

  a {
    text-decoration: underline;
  }
`;

export const VidSection = styled.div`
  ${FlexCenterStyle}
  width: 100%;
`;

export const SingleVideo = styled.div`
  width: calc((100vw - 3rem) / 4);

  iframe {
    border: none;

    width: calc((100vw - 3rem) / 4);
    height: calc(((100vw - 3rem) / 4) * 0.5625);
  }
`;
