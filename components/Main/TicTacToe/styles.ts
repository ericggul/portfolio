import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

interface CurrentComponent {
  currentComponent: String;
}

export const MovementContainer = styled.div<CurrentComponent>`
  ${WholeContainer};
  ${({ currentComponent, theme }) => currentComponent === "booking" && `transform: translateY(-${theme.windowHeight}px);`}
  transition: transform 1s ease-in-out;
  overflow: hidden;
`;

interface Shine {
  shine: any;
}

export const Container = styled.div.attrs<Shine>((props) => ({
  style: {
    background: props.shine,
  },
}))<Shine>`
  position: absolute;
  top: 0;
  left: 0;
  ${WholeContainer};
  ${FlexCenterStyle};
  flex-direction: column;
  background: #f3f3f3;
  transition: background 0.05s;
`;

interface Delay {
  delay: number;
}

export const Text = styled.div<Delay>`
  ${FlexCenterStyle};
  margin: 3.5rem;
  font-size: 1.5rem;
  max-width: 16rem;
  text-align: center;

  animation: appear-and-disappear 5s both;
  animation-delay: ${({ delay }) => delay}s;

  @keyframes appear-and-disappear {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    60% {
      filter: blur(0px);
      opacity: 1;
    }
    100% {
      filter: blur(20px);
      opacity: 0;
    }
  }
`;

export const TicTacToe = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-gap: 0.6rem;
`;

interface Button {
  evenIdx: boolean;
  delay: number;
}

export const Button = styled.div.attrs<Button>((props) => ({
  style: {
    background: props.evenIdx ? `hsl(0, 70%, 54%)` : `hsl(0, 87%, 29%)`,
    animationDelay: props.delay + "s",
  },
}))<Button>`
  width: 3.2rem;
  height: 3.2rem;
  font-size: 1.3rem;
  ${FlexCenterStyle};

  animation: appear 1s;
  @keyframes appear {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  color: hsl(51, 38%, 82%);
`;

export const Img = styled.img`
  width: 80%;
  height: 80%;
`;

export const WonModal = styled.div`
  position: absolute;
`;
