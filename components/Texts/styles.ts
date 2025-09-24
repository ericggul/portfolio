import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  display: flex;
  height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
  justify-content: space-between;
  overflow-y: scroll;

  background: #111;
  background-color: #111;
  color: #ddd;

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

export const Contents = styled.div`
  width: 100vw;
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
  background: #111;

  color: #ddd;
  p {
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: normal;
    text-shadow: 0 0 1px #fff;
    margin: 1rem 0;
    color: #fff;
    margin-top: 2.5rem;
  }

  h5 {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    color: #fff;
    font-style: italic;

    i {
      font-size: 0.8rem;
    }
  }
`;

export const Items = styled.div`
  width: 100vw;

  ${FlexCenterStyle}
  flex-direction: column;

  display: grid;
  grid-row-gap: 0 !important;
  grid-template-columns: ${({ theme }) => (theme.windowWidth > 768 ? "repeat(3, 1fr)" : "repeat(1, 1fr)")};
`;

export const SingleItem = styled.div`
  width: ${({ theme }) => (theme.windowWidth > 768 ? "33.33333333vw" : "100vw")};
  height: ${({ theme }) => (theme.windowWidth > 768 ? "16.66666666667vw" : "50vw")};
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  img {
    width: ${({ theme }) => (theme.windowWidth > 768 ? "16.66666666667vw" : "50vw")};
    height: ${({ theme }) => (theme.windowWidth > 768 ? "16.66666666667vw" : "50vw")};
    object-fit: cover;
  }

  color: #ddd;
  cursor: pointer;
  transition: background 1s;
  &:hover {
    background: #333;
  }
`;

export const Inner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  font-size: 1rem;

  width: calc(50% - 2rem);
  height: calc(100% - 2rem);
  margin: 1rem;

  p {
    font-size: 0.8rem;
  }
`;
