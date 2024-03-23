import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common";

export const Container = styled.div`
  ${FlexCenterStyle}
  justify-content: space-between;
  overflow-y: scroll;

  background: #111;
  color: #ddd;
`;

export const Contents = styled.div`
  width: calc(100vw - 3rem);
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
  margin-left: 1.5rem;
  overflow-y: scroll;
  background: #111;

  color: #ddd;
  p {
    margin: 0.5rem 0;
  }

  h1 {
    font-size: 1.8rem;
    font-weight: normal;
    text-shadow: 0 0 1px #fff;
    margin: 1rem 0;
    color: #fff;
    margin-top: 2.5rem;
  }

  h5 {
    font-size: 1.2rem;
    margin-bottom: 2.5rem;
    color: #fff;
    font-style: italic;

    i {
      font-size: 0.8rem;
    }
  }
`;

export const Items = styled.div`
  width: calc(100vw - 3rem);
  ${FlexCenterStyle}
  flex-direction: column;
`;

export const SingleItem = styled.div`
  width: calc(100vw - 3rem);
  height: 7rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;

  img {
    width: 7rem;
    height: 7rem;
    object-fit: cover;
  }

  color: #ddd;
  cursor: pointer;
  transition: background 2s;
  &:hover {
    background: #333;
  }
`;
