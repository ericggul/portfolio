import styled from "styled-components";
import { FlexCenterStyle } from "styles/common";

export const Container = styled.div`
  margin: 4rem 0;
  ${FlexCenterStyle};
  flex-direction: column;
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : Math.min(theme.windowWidth / 2, 500))}px;
`;

export const Header = styled.h3``;

export const Contents = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  margin: 1rem 0;
`;

export const Content = styled.div`
  cursor: pointer;
  ${FlexCenterStyle};
  flex-direction: column;
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth * 0.3 : Math.min(theme.windowWidth / 2, 500) * 0.3)}px;
  margin: 0 ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth * 0.02 : Math.min(theme.windowWidth / 2, 500) * 0.02)}px;
`;

export const ImgContainer = styled.div`
  width: 100%;
  position: relative;
  height: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth * 0.21 : Math.min(theme.windowWidth / 2, 500) * 0.21)}px;
`;

export const Title = styled.div`
  font-size: 0.8rem;
  height: 2rem;
  margin-top: 0.5rem;

  max-width: 80%;
  text-align: center;
`;
