import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  background: #eee;
  color: #111;
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
`;

export const Contents = styled.div`
  width: calc(100vw - 3rem);
  height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
  padding-bottom: 5rem;
  margin-left: 1.5rem;
  overflow-y: scroll !important;
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1rem" : ".8rem")};
  font-weight: 300;
  transition: opacity 0.3s ease-in-out;

  user-select: text;

  a {
    cursor: pointer;
    // text-decoration: underline;
    color: #111;
  }

  iframe {
    border: none;
  }

  p {
    font-size: 1rem;
    line-height: 1.5;
    margin: 0.5rem 0;
  }

  span {
    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: normal;
    text-shadow: 0 0 1px #111;
    margin: 1.5rem 0;
    color: #000;
    margin-top: 2.5rem;
  }

  h5 {
    font-size: 1.2rem;
    margin: 1rem 0;
    margin-top: 3rem;
    color: #000;
    font-style: italic;

    i {
      font-size: 0.8rem;
    }
  }

  h6 {
    font-size: 1rem;
    margin: 1rem 0;
    margin-bottom: -1rem;
    font-style: italic;
    cursor: pointer;
  }

  h4 {
    font-size: 1rem;
    margin: 0.5rem 0;
    margin-top: -1rem;
    font-style: italic;
    cursor: pointer;
  }

  img {
    width: calc(min(100%, 700px));
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

export const UpperInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 1rem;

  p {
    font-size: 1rem;
    margin: 0.5rem 0.5rem;
    margin-left: 0;
    margin-right: 0.5rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    background: #333;
    color: #fff;
    cursor: pointer;
  }
`;

export const OtherProjectsSection = styled.div`
  width: 100%;
  display: flex;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 100%;
  height: ${({ theme }) => (theme.windowWidth > 768 ? "calc(((100vw - 3rem) / 5) * 0.5625)" : "calc(((100vw - 3rem)/2) * 0.5625)")};
  margin: 0.5rem 0;

  img {
    width: 100%;
    height: ${({ theme }) => (theme.windowWidth > 768 ? "calc(((100vw - 3rem) / 5) * 0.5625)" : "calc(((100vw - 3rem)/2) * 0.5625)")};
    object-fit: cover;
    margin: 0.5rem 0;
  }
`;

export const SingleEl = styled.div`
  width: ${({ theme }) => (theme.windowWidth > 768 ? "calc((100vw - 3rem) / 5)" : "calc((100vw - 3rem) / 2)")};

  h4 {
    font-size: 1rem;
    margin-bottom: 1.5rem;
    font-style: italic;
    color: #bbb;
    text-decoration: none !important;
  }
`;
