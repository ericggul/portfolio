import { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

function TitleContainer({ project }: any) {
  return (
    <S.TitleContainer>
      <S.UpperInformation>
        <span>{project.date}</span>
        <span>{project.medium}</span>
        <span>{project.land.title}</span>
        <span>{project.date}</span>
        <span>{project.medium}</span>
        <span>{project.land.title}</span>
        <span>{project.date}</span>
        <span>{project.medium}</span>
        <span>{project.land.title}</span>
        <span>{project.date}</span>
        <span>{project.medium}</span>
        <span>{project.land.title}</span>
        <span>{project.date}</span>
        <span>{project.medium}</span>
        <span>{project.land.title}</span>
        <span>{project.date}</span>
        <span>{project.medium}</span>
        <span>{project.land.title}</span>
      </S.UpperInformation>

      <h1>{project.title}</h1>
    </S.TitleContainer>
  );
}

function RatingContainer({ project }: any) {
  return (
    <S.RatingContainer>
      <S.StarContainer>
        <S.Star src={"/assets/images/Booking/star-fill.svg"} alt="Star" />
        <S.Star src={"/assets/images/Booking/star-fill.svg"} alt="Star" />
        <S.Star src={"/assets/images/Booking/star-fill.svg"} alt="Star" />
        <S.Star src={"/assets/images/Booking/star-fill.svg"} alt="Star" />
        <S.Star src={"/assets/images/Booking/star.svg"} alt="Star" />
      </S.StarContainer>

      <p>
        {project.rating} ({project.ratingCount} Ratings)
      </p>
    </S.RatingContainer>
  );
}

function DescriptionContainer({ project }: any) {
  return (
    <S.DescriptionContainer>
      <p>{project.longDescription}</p>
    </S.DescriptionContainer>
  );
}

export default function InfoSection({ project }: any) {
  return (
    <S.InfoSection>
      <TitleContainer project={project} />
      <RatingContainer project={project} />
      <DescriptionContainer project={project} />
    </S.InfoSection>
  );
}
