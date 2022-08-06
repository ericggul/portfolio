import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

interface CurrentComponent {
  currentComponent: String;
}

export const Whole = styled.div`
  ${FlexCenterStyle};
  background: hsl(0, 0%, 95%);
`;

export const Inner = styled.div`
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : `${Math.min(theme.windowWidth, 1000)}`)}px;
`;

export const ProjectsContainer = styled.div<CurrentComponent>`
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

  opacity: 0;
  transform: translateY(${({ theme }) => theme.windowHeight}px);
  ${({ currentComponent }) => currentComponent === "booking" && `transform: translateY(0px); opacity: 1;`}
  z-index: 2;
  transition: all 1s ease-in-out;
  overflow-y: scroll;
`;
