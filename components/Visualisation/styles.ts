import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

export const Container = styled.div`
  ${WholeContainer};
  ${FlexCenterStyle}
  cursor: pointer;
`;

const Node = styled.div.attrs({
  className: "node-el",
})`
  color: pink;
`;
