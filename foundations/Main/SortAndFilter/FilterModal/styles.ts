import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

interface ModalOpen {
  modalOpen: boolean;
}

export const Whole = styled.div<ModalOpen>`
  ${WholeContainer};
  position: fixed;
  top: 0;
  left: 0;
  ${FlexCenterStyle};
  z-index: 5;

  ${({ modalOpen }) => (modalOpen ? `opacity: 1` : `opacity: 0`)};
  ${({ modalOpen }) => (modalOpen ? `visibility: visible` : `visibility: hidden`)};
  ${({ modalOpen }) => (modalOpen ? `pointer-events: all` : `pointer-events: none`)};
`;

export const Inner = styled.div`
  position: relative;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.9);
`;

export const Cancel = styled.div`
  position: absolute;
  cursor: pointer;
  background: rgba(255, 100, 100, 1);
  width: 1.5rem;
  height: 1.5rem;
  ${FlexCenterStyle};
  border-radius: 50%;
`;

export const Header = styled.h1`
  text-align: center;
`;

export const FilterContainer = styled.div``;
