import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const NavContainer = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  width: 100vw;
  height: 4.5rem;
  h1 {
    font-size: 1.4rem;
  }

  top: 0;
  background: black;
  color: #ddd;
`;

export const Left = styled.div`
  margin-left: 1.5rem;
`;

export const Right = styled.div`
  margin-right: 1.5rem;
  ${FlexCenterStyle}
`;

interface TabProps {
  currTab: boolean;
}

export const Tab = styled.div<TabProps>`
  font-size: 1.1rem;
  margin-left: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  color: #aaa;

  ${(props) =>
    props.currTab &&
    css`
      color: #fff;
      text-shadow: 0 0 0.5rem #fff;
    `}
`;
