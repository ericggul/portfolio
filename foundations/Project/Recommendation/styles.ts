import styled from "styled-components";
import { FlexCenterStyle } from "styles/common";

export const Container = styled.div`
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : Math.min(theme.windowWidth / 2, 500))}px;
`;
