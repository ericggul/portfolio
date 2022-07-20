import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

export const Container = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle};
`;

export const TicTacToe = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 0.3rem;
`;

export const Button = styled.div`
  width: 3rem;
  height: 3rem;
  border: 1px solid #000;
  ${FlexCenterStyle};
`;
