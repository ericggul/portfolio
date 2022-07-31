import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

export const InfoSection = styled.div`
  ${FlexCenterStyle};
  flex-direction: column;
  text-align: center;
  width: 100%;
  min-height: 25rem;
  overflow-x: hidden;
`;

export const RatingContainer = styled.div`
  width: 100%;
`;

export const TitleContainer = styled.div`
  width: 100%;
`;

export const UpperInformation = styled.div`
  font-size: 0.5rem;

  span {
    font-stretch: 200%;
  }
`;

export const DescriptionContainer = styled.div`
  width: 100%;
`;

export const StarContainer = styled.div`
  ${FlexCenterStyle};
`;

export const Star = styled.img`
  width: 1rem;
  height: auto;
`;
