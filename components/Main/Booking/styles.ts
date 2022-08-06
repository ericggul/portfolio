import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

interface CurrentComponent {
  currentComponent: String;
}

export const Whole = styled.div<CurrentComponent>`
  ${FlexCenterStyle};
  background: hsl(0, 0%, 95%);

  opacity: 0;
  z-index: 2;
  transform: translateY(${({ theme }) => theme.windowHeight}px);
  ${({ currentComponent }) => currentComponent === "booking" && `transform: translateY(0px); opacity: 1;`}
  transition: all 1s ease-in-out;
`;

export const Inner = styled.div`
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : `${Math.min(theme.windowWidth, 1000)}`)}px;
`;

export const ProjectsContainer = styled.div`
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
