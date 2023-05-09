import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

interface CurrentComponent {
  currentComponent: String;
}

export const Whole = styled.div<CurrentComponent>`
  ${FlexCenterStyle};
  background: hsl(0, 0%, 95%);

  overflow-x: hidden;

  z-index: 2;
  animation: appear-and-transform 1s ease-in-out;

  @keyframes appear-and-transform {
    from {
      transform: translateY(${({ theme }) => theme.windowHeight}px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const Inner = styled.div`
  overflow-x: hidden;
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : `${Math.min(theme.windowWidth, 1000)}`)}px;
`;

export const ProjectsContainer = styled.div`
  max-width: 100%;
  overflow-x: hidden;
  ${({ theme }) =>
    theme.windowWidth < 768
      ? `
          display: flex;
          flex-direction: column;
          align-items: center;
    `
      : `
          display: grid;
          grid-template-columns:repeat(2, ${Math.min(theme.windowWidth / 2, 500)}px);
          justify-content: center;
  `}

  overflow-y: scroll;
`;
