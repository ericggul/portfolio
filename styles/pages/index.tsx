import styled, { css } from "styled-components";
import { FlexCenterStyle } from "styles/common";
import { animated } from "@react-spring/web";

interface Level {
  level: number;
}

export const Container = styled.div<Level>`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${({ theme }) => theme.windowWidth}px;
  height: ${({ theme }) => theme.windowHeight}px;
  ${FlexCenterStyle}
  cursor: pointer;

  ${({ level }) => level >= 3 && "background: black"};
`;

const Level1 = css`
  width: 10rem;
  height: 2.2rem;
  color: #fff;
  background-color: rgb(0, 1, 2);
`;

const Level2 = css`
  width: ${({ theme }) => theme.windowHeight}px;
  height: ${({ theme }) => theme.windowWidth}px;
  color: white;
  background: linear-gradient(hsl(256, 87%, 51%), hsl(151, 90%, 38%));
  transform: rotate(90deg) scale(5);
`;

const Level3 = css`
  ${Level1};
  opacity: 0;
  transition: all 1s ease-in;
`;

export const Title = styled(animated.div)<Level>`
  font-size: 4rem;
  font-weight: bold;
  transition: all 0.4s ease-in;

  ${FlexCenterStyle};
  cursor: pointer;

  ${({ level }) => level === 1 && Level1};
  ${({ level }) => level === 2 && Level2};
  ${({ level }) => level === 3 && Level3};
  ${({ level }) => level >= 4 && "color: white"};
`;

interface SmallEl {
  pos: any;
  rotation: number;
  level: number;
  colorHue: any;
}

export const SmallEl = styled.div.attrs<SmallEl>((props) => ({
  style: {
    top: `${props.pos.y}px`,
    left: `${props.pos.x}px`,
    transform: `rotate(${props.rotation}turn)`,
    background: `hsl(${props.colorHue}, 100%, 50%)`,
    boxShadow: `0 0 .3rem white, 0 0 .5rem hsl(${(180 + props.colorHue) % 360}, 100%, 50%), 0 0 1rem hsl(${(180 + props.colorHue) % 360}, 100%, 50%), 0 0 2rem hsl(${
      (180 + props.colorHue) % 360
    }, 100%, 50%)`,
  },
}))<SmallEl>`
  opacity: 0;
  ${({ level }) => level >= 3 && "opacity: 1"};

  font-family: Anton;

  position: absolute;
  transition: all 0.3s ease-out;
  font-size: 1.5rem;
  border-radius: 4rem;
  padding: 0.3rem 1rem;
  border: 0.3rem solid black;
`;

export const ButtonContainer = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  position: absolute;
  top: ${({ theme }) => theme.windowHeight * 0.3}px;
  height: ${({ theme }) => theme.windowHeight * 0.7}px;
  transition: all 1s;
`;

interface Show {
  show: boolean;
}

export const SingleSet = styled.div<Show>`
  ${FlexCenterStyle};
  ${({ show }) => (show ? "display: flex" : "display: none")};
  transition: all 1s;
`;

const Button = css`
  ${FlexCenterStyle};
  font-family: coming-soon;
  font-size: 2rem;
  width: 11rem;
  height: 3.5rem;
  border-radius: 0.6rem;
  backdrop-filter: blur(0.5rem);
  margin: 0.5rem;
`;

export const YesButton = styled.div`
  ${Button};
  color: hsl(94, 91%, 57%);
  border: 0.1rem solid hsl(94, 91%, 57%);
  box-shadow: 0 0 0.5rem hsl(94, 91%, 57%), 0 0 1rem hsl(94, 91%, 57%);
`;

export const NoButton = styled.div`
  ${Button};
  color: hsl(330, 91%, 57%);
  border: 0.1rem solid hsl(330, 91%, 57%);
  box-shadow: 0 0 0.5rem hsl(330, 91%, 57%), 0 0 1rem hsl(330, 91%, 57%);
`;
