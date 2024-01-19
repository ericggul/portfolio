import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const NavContainer = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  width: 100vw;
  height: 4.5rem;

  top: 0;
  background: #111;
  color: #ddd;

  h1 {
    font-weight: normal;
    font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1.4rem" : "1rem")};
    color: #aaa;
  }
`;

export const Left = styled.div`
  margin-left: ${({ theme }) => (theme.windowWidth > 768 ? "1.5rem" : "1.1rem")};
`;

export const Right = styled.div`
  margin-right: ${({ theme }) => (theme.windowWidth > 768 ? "1.5rem" : "1.1rem")};
  ${FlexCenterStyle}
`;

interface TabProps {
  $currTab: boolean;
}

export const Tab = styled.div<TabProps>`
  font-size: ${({ theme }) => (theme.windowWidth > 768 ? "1.1rem" : "1rem")};
  margin-left: ${({ theme }) => (theme.windowWidth > 768 ? "1.1rem" : ".7rem")};
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #aaa;

  ${(props) =>
    props.$currTab &&
    css`
      color: #fff;
      text-shadow: 0 0 0.5rem #fff;
    `}
`;
