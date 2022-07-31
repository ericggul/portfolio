import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

export const Container = styled.div`
  ${FlexCenterStyle};

  ${WholeContainer};
  overflow: scroll;
  background: hsl(0, 0%, 95%);
`;

export const Contents = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : Math.min(theme.windowWidth / 2, 500))}px;
  height: 100%;
`;

export const BackNavigator = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.7rem;
  padding: 0.2rem 0.6rem;
  background: hsl(0, 0%, 95%);
  font-size: 0.8rem;
  z-index: 2;

  animation: vibrate 3s linear infinite;

  @keyframes vibrate {
    0% {
      transform: rotate(0deg);
    }
    30% {
      transform: rotate(15deg);
    }
    35% {
      transform: rotate(-10deg);
    }
    40% {
      transform: rotate(7deg);
    }
    43% {
      transform: rotate(-5deg);
    }
    46% {
      transform: rotate(3deg);
    }
    48% {
      transofmr: rotate(-2deg);
    }
    49% {
      transform: rotate(1deg);
    }
    50% {
      transform: rotate(0);
    }
  }
`;

export const ImgSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  width: 100%;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 100%;
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

export const InfoSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  text-align: center;
`;

export const StarContainer = styled.div`
  ${FlexCenterStyle};
`;

export const Star = styled.img`
  width: 1rem;
  height: auto;
`;
