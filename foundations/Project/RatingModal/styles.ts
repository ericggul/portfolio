import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

interface ModalOpen {
  modalOpen: boolean;
}
export const Whole = styled.div<ModalOpen>`
  ${({ modalOpen }) => (modalOpen ? `opacity: 1` : `opacity: 0`)};
  ${({ modalOpen }) => (modalOpen ? `visibility: visible` : `visibility: hidden`)};
  ${({ modalOpen }) => (modalOpen ? `pointer-events: all` : `pointer-events: none`)};
  transition: all 0.3s;
`;

export const Background = styled.div`
  top: 0;
  left: 0;
  ${WholeContainer};
  position: fixed;
`;
