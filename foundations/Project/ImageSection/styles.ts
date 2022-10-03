import styled, { css } from "styled-components";

import { FlexCenterStyle, WholeContainer } from "styles/common";

export const ImgSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
  overflow: hidden;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth * 0.7 : 0.7 * Math.min(theme.windowWidth / 2, 500))}px;
`;

export const Dots = styled.div`
  ${FlexCenterStyle};
  margin: 0.5rem 0;
`;

interface CurrentImage {
  currentImage: boolean;
}

export const Dot = styled.div<CurrentImage>`
  width: 0.4rem;
  height: 0.4rem;
  margin: 0.2rem;
  border-radius: 50%;
  border: 1px solid black;

  ${({ currentImage }) => currentImage && `background: black;`}
  transition: all .5s;
  cursor: pointer;
`;

export const BlurEffectUpper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0) 80%, rgba(0, 0, 0, 0.5));
`;

export const Image = styled.img<CurrentImage>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  ${({ currentImage }) => (currentImage ? `transform: scale(1);` : `transform: scale(0);`)}

  transition: all .4s ease-out;
`;
