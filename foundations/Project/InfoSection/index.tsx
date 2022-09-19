import { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

function TitleContainer({ project }: any) {
  return (
    <S.TitleContainer>
      <S.UpperInformation>
        {new Array(10).fill(0).map((_, i) => (
          <span key={i}>
            {project.date} &#8226; {project.medium} &#8226; {project.land.title} &#8226; {`Produly made by JYC`} &#8226; {project.expectedTime ? `${project.expectedTime} minutes` : "Link Below"}{" "}
            &#8226;{" "}
          </span>
        ))}
        <span>{project.date}</span>
      </S.UpperInformation>
      <h1>{project.title}</h1>
    </S.TitleContainer>
  );
}

function RatingContainer({ project, handleModalOpen, modalHadOpened }: any) {
  return (
    <S.RatingContainer>
      <S.QuoteContainer>{project.quoteDescription ? `"${project.quoteDescription}"` : `"Astonishing"`}</S.QuoteContainer>
      <S.StarContainer>
        {[...Array(6)].map((_, i) => (
          <S.Star src={`/assets/images/Booking/star${Math.round(project.rating) >= i + 1 ? "-fill" : ""}.svg`} alt="Star" key={i} />
        ))}
      </S.StarContainer>

      <p>
        {project.rating.toFixed(3)} <span>({project.ratingCount} Ratings)</span>
      </p>
      <S.AddRating onClick={handleModalOpen}>{modalHadOpened ? "Modify my Rating" : "+ Add Your Rating"} </S.AddRating>
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

function LinkContainer({ project }: any) {
  return (
    <S.LinkContainer>
      {new Array(50).fill(0).map((_, i) => (
        <span key={i}>
          <a href={project.land.baseLandURL ? project.land.baseLandURL + project.projectURL : project.projectURL} target="_blank" rel="noreferrer">
            Visit Link
          </a>{" "}
        </span>
      ))}
    </S.LinkContainer>
  );
}

export default function InfoSection({ project, handleModalOpen, modalHadOpened }: any) {
  return (
    <S.InfoSection>
      <TitleContainer project={project} />
      <RatingContainer project={project} handleModalOpen={handleModalOpen} modalHadOpened={modalHadOpened} />
      <DescriptionContainer project={project} />
      {project.projectURL && <LinkContainer project={project} />}
    </S.InfoSection>
  );
}
