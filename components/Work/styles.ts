import styled, { css, keyframes } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  background: #111;
  background-color: #111;
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
`;

export const Contents = styled.div`
  width: calc(100vw - 3rem);
  height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
  padding-bottom: 5rem;
  margin-left: 1.5rem;
  overflow-y: scroll !important;
  overflow-x: hidden !important;
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1rem" : ".8rem")};
  font-weight: 300;
  transition: opacity 0.3s ease-in-out;

  color: #bbb;

  /* prevent horizontal overflow for all text */
  p, h1, h2, h3, h4, h5, h6, a, span, li, blockquote {
    overflow-wrap: anywhere;
    word-break: break-word;
    hyphens: auto;
    white-space: normal;
    max-width: 100%;
  }

  a {
    cursor: pointer;
    // text-decoration: underline;
    color: #fff;
  }

  iframe {
    border: none;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0;
  }

  span {
    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: normal;
    text-shadow: 0 0 1px #fff;
    margin: 1.5rem 0;
    color: #fff;
    margin-top: 2.5rem;
  }

  h2 {
    font-size: 1.4rem;
    font-weight: normal;
    text-shadow: 0 0 1px #fff;
    margin: 1.5rem 0;
    color: #fff;
    margin-top: 2.5rem;
  }

  h5 {
    font-size: 1rem;
    margin: 1rem 0;
    margin-bottom: 1.5rem;
    font-style: italic;
  }

  h6 {
    font-size: 1rem;
    margin: 1rem 0;
    margin-bottom: -1rem;
    font-style: italic;
    cursor: pointer;
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
  flex-direction: ${({ theme }) => (theme.windowWidth > 768 ? "row" : "column")};
  width: 100%;
  margin: 2.5rem 0;

  img {
    width: ${({ theme }) => (theme.windowWidth > 768 ? "calc((100vw - 3rem) / 3)" : "calc(100vw - 3rem)")};
    height: ${({ theme }) => (theme.windowWidth > 768 ? "calc(((100vw - 3rem) / 3) * 0.5625)" : "calc((100vw - 3rem) * 0.5625)")};
    object-fit: cover;
    margin: 0.2rem 0;
  }
`;

export const VideoSection = styled.div`
  iframe {
    border: none;

    width: calc((100vw - 3rem) * ${({ theme }) => (theme.windowWidth > 768 ? 0.3333 : 1)});
    height: calc(((100vw - 3rem) * 0.5625) * ${({ theme }) => (theme.windowWidth > 768 ? 0.3333 : 1)});

    margin: 1.5rem 0;
  }
`;

export const OtherProjectsSection = styled.div`
  width: 100%;
  display: flex;
`;

export const SingleEl = styled.div`
  width: ${({ theme }) => (theme.windowWidth > 768 ? "calc((100vw - 3rem) / 5)" : "calc((100vw - 3rem) / 2)")};

  img {
    width: 100%;
    height: ${({ theme }) => (theme.windowWidth > 768 ? "calc(((100vw - 3rem) / 5) * 0.5625)" : "calc(((100vw - 3rem)/2) * 0.5625)")};
    object-fit: cover;
    margin: 0.5rem 0;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #bbb;
    text-decoration: none !important;
  }
`;

const shimmer = keyframes`
  100% {
    transform: translateX(100%);
  }
`;

export const SkeletonPlaceholder = styled.div`
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
