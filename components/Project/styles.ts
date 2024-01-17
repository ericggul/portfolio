import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle}

  overflow-y: scroll;
  font-family: "Times New Roman", Times, serif;
  transition: all 0.3s ease-in-out;
`;

export const Wrapper = styled.div`
  ${WholeContainer}
  min-height: ${({ theme }) => theme.windowHeight}px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;

export const SingleEl = styled.div`
  width: 20vw;
  height: 11.25vw;
  position: relative;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
