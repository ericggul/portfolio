import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

const getRandom = (min: number, max: number) => Math.random() * (max - min) + min;

interface Shine {
  shine: boolean;
}

export const Container = styled.div<Shine>`
  ${WholeContainer};
  ${FlexCenterStyle};
  background: #f3f3f3;
  ${({ shine }) => shine && `background: black`}
`;

export const TicTacToe = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.6rem;
`;

interface Button {
  evenIdx: boolean;
}

export const Button = styled.div<Button>`
  width: 3.2rem;
  height: 3.2rem;

  font-size: 1.3rem;

  background: ${({ evenIdx }) => (evenIdx ? `hsl(0, 70%, 54%)` : `hsl(0, 87%, 29%)`)};
  ${FlexCenterStyle};

  color: hsl(51, 38%, 82%);
`;
