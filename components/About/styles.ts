import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  overflow-y: scroll;
  background: black;
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
`;

export const Contents = styled.div`
  width: calc(100vw - 3rem);
  margin-left: 1.5rem;
  overflow-y: scroll;

  color: #ddd;
  p {
    margin: 0.5rem 0;
  }
`;