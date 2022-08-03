import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

interface ModalOpen {
  modalOpen: boolean;
}
export const Whole = styled.div<ModalOpen>`
  top: 0;
  left: 0;
  ${WholeContainer};
  ${FlexCenterStyle};
  position: fixed;
  ${({ modalOpen }) => (modalOpen ? `opacity: 1` : `opacity: 0`)};
  ${({ modalOpen }) => (modalOpen ? `visibility: visible` : `visibility: hidden`)};
  ${({ modalOpen }) => (modalOpen ? `pointer-events: all` : `pointer-events: none`)};
  transition: all 0.5s;
  z-index: 5;
`;

export const Background = styled.div`
  top: 0;
  left: 0;
  ${WholeContainer};
  position: fixed;
  backdrop-filter: blur(0.4rem);
`;

export const ModalBox = styled.div`
  z-index: 6;
  width: ${({ theme }) => (theme.windowWidth > 768 ? theme.windowWidth * 0.5 : 768 * 0.5)}px;
  height: ${({ theme }) => (theme.windowWidth > 768 ? theme.windowWidth * 0.25 : 768 * 0.25)}px;
  background: rgba(0, 0, 0, 0.9);
  color: white;
  ${FlexCenterStyle};
  flex-direction: column;
  position: relative;

  h2 {
    text-align: center;
    width: 90%;
  }
`;

export const Cancel = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

export const Stars = styled.div`
  margin: 1rem 0;
  ${FlexCenterStyle};
  flex-direction: row;
`;

export const Star = styled.div`
  position: relative;
  width: 2rem;
  height: 2rem;
  margin: 0.2rem;
`;

interface Show {
  show: boolean;
}

export const Confirm = styled.div<Show>`
  ${({ show }) => (show ? `opacity: 1` : `opacity: 0`)};
  transition: opacity 0.4s;
  font-size: 1.4rem;
  padding: 0.3rem 1rem;
  border-radius: 0.5rem;
  background: white;
  color: black;
  border: 1px solid white;
  ${FlexCenterStyle};
`;
