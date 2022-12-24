import { useState, useEffect } from "react";
import * as S from "./styles";

function RatingFilter() {
  return <div></div>;
}

function DateFilter() {
  return <div></div>;
}

function LandFilter() {
  return <div></div>;
}

export default function FilterModal({ type, modalOpen, handleModalClose }: any) {
  function handleBackgroundClick(e: any) {
    e.preventDefault();
    handleModalClose();
  }

  return (
    <S.Whole modalOpen={modalOpen} onClick={handleBackgroundClick}>
      <S.Inner>
        <S.Cancel onClick={handleBackgroundClick} style={{ top: "-0.5rem", right: "-0.5rem" }}>
          X
        </S.Cancel>
        <S.Cancel onClick={handleBackgroundClick} style={{ bottom: "-0.5rem", right: "-0.5rem" }}>
          X
        </S.Cancel>
        <S.Cancel onClick={handleBackgroundClick} style={{ top: "-0.5rem", left: "-0.5rem" }}>
          X
        </S.Cancel>
        <S.Cancel onClick={handleBackgroundClick} style={{ bottom: "-0.5rem", left: "-0.5rem" }}>
          X
        </S.Cancel>

        <S.Header>Sort by {type} </S.Header>
        <S.FilterContainer>
          {type === "rating" && <RatingFilter />}
          {type === "date" && <DateFilter />}
          {type === "land" && <LandFilter />}
        </S.FilterContainer>
      </S.Inner>
    </S.Whole>
  );
}
