import styled from "styled-components";

import { FlexCenterStyle, WholeContainer } from "styles/common";

export const Container = styled.div`
  width: 100%;
  // height: ${({ theme }) => theme.windowHeight}px;

  ${FlexCenterStyle};
  margin: 1rem 0;
  // justify-content: space-evenly;
  flex-direction: column;
`;

export const ProjectNumbers = styled.div`
  font-size: 12rem;
  font-weight: bold;
  position: relative;
  letter-spacing: -0.8rem;
`;

export const SmallQuote = styled.div`
  position: absolute;
  right: -3.3rem;
  bottom: 2.7rem;
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 0;
  font-style: italic;
`;

export const SortAndFilter = styled.div`
  margin: 1rem 0;
`;

export const Header = styled.div`
  font-size: 1.4rem;
  margin: 0.5rem 0;
  font-style: italic;
`;

export const SortOrFiltContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  ${FlexCenterStyle};
  flex-direction: column;
`;

export const SecondRow = styled.div`
  ${FlexCenterStyle};
  margin: 0.6rem 0;
  width: 100%;
`;

interface ButtonInterface {
  current?: boolean;
}

export const Button = styled.div<ButtonInterface>`
  padding: 0.3rem 0;
  cursor: pointer;
  width: 7.3rem;
  ${FlexCenterStyle};
  font-size: 0.9rem;
  border-right: 1px solid black;

  ${({ current }) => current && `font-weight: bold; font-size: 1rem;`}

  &:last-child {
    border-right: none;
  }

  span {
    margin-left: 0.5rem;
  }
`;
