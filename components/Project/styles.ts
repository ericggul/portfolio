import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle}

  background: black;
  overflow-y: scroll;
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
