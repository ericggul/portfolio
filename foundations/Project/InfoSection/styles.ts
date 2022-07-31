import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

export const InfoSection = styled.div`
  ${FlexCenterStyle};

  margin: 1.3rem 0;

  flex-direction: column;
  text-align: center;
  width: 100%;

  overflow-x: hidden;
`;

export const TitleContainer = styled.div`
  width: 90%;
  ${FlexCenterStyle};
  flex-direction: column;

  h1 {
    margin-top: 0.9rem;
    margin-bottom: 1.2rem;
  }
`;

export const UpperInformation = styled.div`
  font-size: 0.5rem;
  width: 80%;

  word-break: break-all;

  span {
    font-stretch: 200%;
  }
`;

export const RatingContainer = styled.div`
  width: 100%;

  ${FlexCenterStyle};
  flex-direction: column;
  margin: 0.6rem 0;
  padding: 0.2rem 0;
  background: black;
  color: #f5f5f3;

  p {
    font-weight: bold;
    font-size: 1.2rem;

    span {
      font-weight: 300;
      font-size: 0.8rem;
      color: #ddd;
    }
  }
`;

export const StarContainer = styled.div`
  margin: 0.5rem 0;
  ${FlexCenterStyle};
`;

export const Star = styled.img`
  width: 1rem;
  height: auto;
`;

export const AddRating = styled.div`
  ${FlexCenterStyle};
  margin: 0.4rem 0;
  font-size: 0.6rem;
  margin-bottom: 0.6rem;
  border-bottom: 1px solid #ddd;
  color: #ddd;
  cursor: pointer;
`;

export const DescriptionContainer = styled.div`
  margin: 1.2rem 0;
  width: 80%;
  text-align: left;
`;

export const LinkContainer = styled.div`
  margin: 0.8rem 0;
  width: 82%;
  word-break: keep-all;
  cursor: pointer;
  font-size: 0.5rem;
`;
