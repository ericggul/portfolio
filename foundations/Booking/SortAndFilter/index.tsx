import { useState } from "react";

//modals
import FilterModal from "./FilterModal";

//hooks
import { useModalWithType } from "utils/hooks/useModal";

import * as S from "./styles";

function Sorter({ handleSortChange }: any) {
  const [sortingMethod, setSortingMethod] = useState<any>("");
  const [sortingDir, setSortingDir] = useState("desc");

  const handleClick = (type: any) => {
    console.log("click!");
    if (type === sortingMethod) {
      setSortingDir(sortingDir === "asc" ? "desc" : "asc");
      handleSortChange(type, sortingDir === "asc" ? "desc" : "asc");
    } else {
      setSortingMethod(type);
      setSortingDir("desc");
      handleSortChange(type, "desc");
    }
  };

  return (
    <S.SortOrFiltContainer>
      <S.Header>Sort by</S.Header>
      <S.SecondRow>
        <S.Button onClick={() => handleClick("rating")} current={sortingMethod === "rating"}>
          Rating
          {sortingMethod === "rating" && <span>{sortingDir === "asc" ? "↑" : "↓"}</span>}
        </S.Button>
        <S.Button onClick={() => handleClick("date")} current={sortingMethod === "date"}>
          Date
          {sortingMethod === "date" && <span>{sortingDir === "asc" ? "↑" : "↓"}</span>}
        </S.Button>
        <S.Button onClick={() => handleClick("land")} current={sortingMethod === "land"}>
          Land
          {sortingMethod === "land" && <span>{sortingDir === "asc" ? "↑" : "↓"}</span>}
        </S.Button>
      </S.SecondRow>
    </S.SortOrFiltContainer>
  );
}

function Filter() {
  const { modalType, handleModalOpen, handleModalClose } = useModalWithType();

  return (
    <S.SortOrFiltContainer>
      <S.Header>Filter by</S.Header>
      <S.SecondRow>
        <S.Button onClick={() => handleModalOpen("rating")}>Rating</S.Button>
        <S.Button onClick={() => handleModalOpen("date")}>Date</S.Button>
        <S.Button onClick={() => handleModalOpen("land")}>Land</S.Button>
      </S.SecondRow>

      <FilterModal type={modalType} modalOpen={modalType != null} handleModalClose={handleModalClose} />
    </S.SortOrFiltContainer>
  );
}

function Mixed() {
  return (
    <S.SortOrFiltContainer>
      <S.Header>Sort and Filter by</S.Header>
      <S.SecondRow>
        <S.Button>Rating</S.Button>
        <S.Button>Date</S.Button>
        <S.Button>Land</S.Button>
      </S.SecondRow>
    </S.SortOrFiltContainer>
  );
}

function Question() {
  return (
    <S.SortOrFiltContainer>
      <S.Header>What is</S.Header>
      <S.SecondRow>
        <S.Button>Rating</S.Button>
        <S.Button>Date</S.Button>
        <S.Button>Land</S.Button>
      </S.SecondRow>
    </S.SortOrFiltContainer>
  );
}

export default function SortAndFilter({ filteredProjects, handleSortChange }: any) {
  return (
    <S.Container>
      <S.Header>You are viewing</S.Header>
      <S.ProjectNumbers>
        {filteredProjects.length}
        <S.SmallQuote>projects</S.SmallQuote>
      </S.ProjectNumbers>
      <S.SortAndFilter>
        <Sorter handleSortChange={handleSortChange} />
        {/* <Filter />
        <Mixed />
        <Question /> */}
      </S.SortAndFilter>
    </S.Container>
  );
}
