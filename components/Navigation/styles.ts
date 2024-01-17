import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const NavContainer = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  width: 100vw;
  height: 4.5rem;
  font-size: 1.5rem;
  top: 0;
  background: black;
  color: #ddd;
`;

export const Left = styled.div`
  margin-left: 1.5rem;
`;

export const Right = styled.div`
  margin-right: 2rem;
  ${FlexCenterStyle}
`;

interface TabProps {
  currTab: boolean;
}

export const Tab = styled.div<TabProps>`
  font-size: 1.2rem;
  margin-left: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  ${(props) =>
    props.currTab &&
    css`
      color: #fff;
      font-weight: bold;
    `}
`;
