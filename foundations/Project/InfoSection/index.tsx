import React, { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

function TitleContainer({ project }: any) {
  return (
    <S.TitleContainer>
      <S.UpperInformation>
        {new Array(10).fill(0).map((_, i) => (
          <span key={i}>
            {project.date} &#8226; {project.medium} &#8226; {project.land.title} &#8226; {`Produly made by JYC`} &#8226; {"Link Below"} &#8226;{" "}
          </span>
        ))}
        <span>{project.date}</span>
      </S.UpperInformation>
      <h1>{project.title}</h1>
    </S.TitleContainer>
  );
}

const STAR_SVG = "/assets/images/Booking/star.svg";
const STAR_FILL_SVG = "/assets/images/Booking/star-fill.svg";

function RatingContainer({ project, handleModalOpen, modalHadOpened }: any) {
  return (
    <S.RatingContainer>
      <S.QuoteContainer>{project.quoteDescription ? `"${project.quoteDescription}"` : `"Astonishing"`}</S.QuoteContainer>
      <S.StarContainer>
        <S.Star src={Math.round(project.rating) >= 1 ? STAR_FILL_SVG : STAR_SVG} alt="Star" />
        <S.Star src={Math.round(project.rating) >= 2 ? STAR_FILL_SVG : STAR_SVG} alt="Star" />
        <S.Star src={Math.round(project.rating) >= 3 ? STAR_FILL_SVG : STAR_SVG} alt="Star" />
        <S.Star src={Math.round(project.rating) >= 4 ? STAR_FILL_SVG : STAR_SVG} alt="Star" />
        <S.Star src={Math.round(project.rating) >= 5 ? STAR_FILL_SVG : STAR_SVG} alt="Star" />
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
      {project.longDescription &&
        project.longDescription.split("-n-").map((paragraph: any, i: number) => (
          <React.Fragment key={i}>
            <p>{paragraph}</p>
            {project.longDescription.split("-n-").length > i + 1 && <hr />}
          </React.Fragment>
        ))}
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
