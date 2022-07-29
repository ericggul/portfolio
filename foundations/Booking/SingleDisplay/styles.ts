import styled from "styled-components";
import { FlexCenterStyle, WholeContainer } from "styles/common";

export const Container = styled.div`
  margin: 0.9rem 0;
  display: flex;
  flex-direction: column;
  width: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth : Math.min(theme.windowWidth / 2, 500))}px;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  margin: 0.6rem 1.5rem;
  width: calc(100% - 3rem);
  position: relative;
  height: ${({ theme }) => (theme.windowWidth < 768 ? theme.windowWidth - 18 : Math.min(theme.windowWidth / 2, 500) - 24) * 0.7}px;
  border-radius: 0.7rem;
  overflow: hidden;
`;

export const Land = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.7rem;
  padding: 0.2rem 0.6rem;
  background: hsl(0, 0%, 95%);
  font-size: 0.8rem;
`;

export const SingleDisplayImg = styled.img``;

export const ContentsContainer = styled.div`
  margin: 0.6rem 1.5rem;
  width: calc(100% - 3rem);
  position: relative;
`;

export const ContentsLeft = styled.div``;

export const Title = styled.h2``;

export const ShortDescription = styled.p``;
export const Medium = styled.p`
  max-width: 70%;
  font-weight: 300;
  font-size: 0.95rem;
  color: #555;
`;

export const Distance = styled.p`
  max-width: 70%;
  font-weight: 300;
  font-size: 0.95rem;
  color: #555;
`;

export const Rating = styled.div`
  display: flex;

  position: absolute;
  right: 0;
  top: 0;
`;

export const RatingStar = styled.div`
  position: relative;
  height: 1rem;
  width: 1rem;
  margin-right: 0.2rem;
`;

export const RatingText = styled.div`
  ${FlexCenterStyle};
  span {
    margin-left: 0.3rem;
    font-size: 0.85rem;
    color: #555;
  }
`;
