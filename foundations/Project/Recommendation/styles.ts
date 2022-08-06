import styled from "styled-components";
import { FlexCenterStyle } from "styles/common";

export const Container = styled.div`
  margin: 4rem 0;
  ${FlexCenterStyle};
  flex-direction: column;
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : Math.min(theme.windowWidth / 2, 500))}px;
`;

export const HeaderContainer = styled.div`
  position: relative;
  width: 14rem;
  height: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  ${FlexCenterStyle};
`;
interface HeaderProps {
  delta: number;
}
function adjustDeltaExtreme(val: number) {
  if (val === 3) {
    return -1;
  } else if (val === -3) {
    return 1;
  }
  return val;
}

export const Header = styled.div.attrs<HeaderProps>((props) => ({
  style: {
    transform: `translateX(${adjustDeltaExtreme(props.delta) * 100}%) rotateY(${adjustDeltaExtreme(props.delta) * 90}deg)`,
    opacity: props.delta === 0 ? 1 : 0,
  },
}))<HeaderProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: all 0.5s ease-in-out;
`;

export const Contents = styled.div`
  ${FlexCenterStyle};
  width: 100%;
  margin: 1.5rem 0;
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
  border-radius: 0.3rem;
  overflow: hidden;
  height: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth * 0.21 : Math.min(theme.windowWidth / 2, 500) * 0.21)}px;
`;

export const Title = styled.div`
  font-size: 0.8rem;
  height: 2rem;
  margin-top: 0.5rem;

  color: #333;
  max-width: 80%;
  text-align: center;
`;
