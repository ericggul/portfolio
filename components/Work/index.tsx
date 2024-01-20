"use client";

//styles
import * as S from "./styles";
import { TYPE_CONVERSION } from "@/public/static";

export default function Work({ projectData }: any) {
  return (
    <S.Container>
      {projectData && (
        <S.Contents>
          <h1>{projectData.title}</h1>
          <p>
            {projectData.medium}, {projectData.year}, {TYPE_CONVERSION[projectData.type]}
          </p>

          <ImgSection imageURLBase={projectData.imageURLBase} imageNumber={projectData.imageNumber} />

          {projectData.projectURL && (
            <>
              <h1>{"Live Project"}</h1>
              <iframe
                src={projectData.projectURL}
                style={{
                  margin: "0 auto",
                  width: "100%",
                  height: "65vh",
                }}
              />
              <h5>
                Experience the Project from an External Link:{" "}
                <a href={projectData.projectURL} target="_blank" rel="noopener noreferrer">
                  LINK
                </a>
              </h5>
            </>
          )}

          <br />
          <br />
          <p>Ⓒ Jeanyoon Choi, 2024</p>
          <br />
          <br />
        </S.Contents>
      )}
    </S.Container>
  );
}

function ImgSection({ imageURLBase, imageNumber }: any) {
  return (
    <S.ImgSection>
      <img src={`/assets${imageURLBase}/1.webp`} alt="nonequality" />
      <img src={`/assets${imageURLBase}/2.webp`} alt="nonequality" />
      <img src={`/assets${imageURLBase}/3.webp`} alt="nonequality" />
    </S.ImgSection>
  );
}
