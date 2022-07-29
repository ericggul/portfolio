import React from "react";
import * as S from "./styles";

// import TestImg from "/assets/images/Test.png";

import SingleDisplay from "foundations/Booking/SingleDisplay";

export default function Booking({ currentComponent }: any) {
  const data = {
    land: `Please Open a Console`,
    imageUrl: `/assets/project-images/please-open-a-console/Test.png`,
    title: `Authorized Personnel Only`,
    shortDescription: `Monopage web art criticizing authority.`,
    medium: `HTML`,
    distance: `5433km`,
    rating: 4.325,
    ratingCount: 243,
  };
  return (
    <S.Container currentComponent={currentComponent}>
      <SingleDisplay project={data} />
      <SingleDisplay project={data} />
      <SingleDisplay project={data} />
    </S.Container>
  );
}

{
  /* <S.ImgContainer>
<S.Land>{project.land}</S.Land>
<S.SingleDisplayImg src={TestImg} />
</S.ImgContainer>
<S.ContentsContainer>

<S.Title>{project.title}</S.Title>
<S.ShortDescription>{project.shortDescription}</S.ShortDescription>
<S.Medium>{project.medium}</S.Medium>
<S.Distance>{project.distance}</S.Distance>
<S.Rating>{project.rating}({project.ratingCount})</S.Rating>
</S.ContentsContainer> */
}
