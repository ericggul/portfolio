"use client";

//styles
import * as S from "./styles";
import useResize from "@/utils/hooks/useResize";
import { TYPE_CONVERSION } from "@/public/static";
import { useMemo } from "react";

export default function Work({ projectData }: any) {
  const [windowWidth, windowHeight] = useResize();

  return (
    <S.Container>
      {projectData && (
        <S.Contents>
          <h1>{projectData.title}</h1>
          <p>
            {projectData.medium}, {projectData.year}, {TYPE_CONVERSION[projectData.type] || "Artwork"}
          </p>

          <ImgSection imageURLBase={projectData.imageURLBase} imageNumber={projectData.imageNumber} />

          {projectData.projectURL && windowWidth > 768 && (
            <>
              <h1>{"Live Project"}</h1>
              <iframe
                src={projectData.projectURL}
                style={{
                  margin: "0 auto",
                  width: "85%",
                  height: "75vh",
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
          {projectData.projectURL && windowWidth <= 768 && (
            <>
              <h5>
                You can experience the project on DESKTOP or LAPTOP.{" "}
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
  const [windowWidth, windowHeight] = useResize();
  const imagesCount = useMemo(() => Math.min(3, imageNumber), [imageNumber]);

  return (
    <S.ImgSection>
      {new Array(imagesCount).fill(0).map((_, i) => (
        <img
          src={`/assets${imageURLBase}/${i + 1}.webp`}
          alt="nonequality"
          key={i}
          style={{
            width: `${windowWidth > 768 ? `calc((100vw - 3rem) / ${imagesCount})` : "calc(100vw - 3rem)"}`,
            height: `${windowWidth > 768 ? `calc(((100vw - 3rem) / ${imagesCount}) * 0.5625)` : "calc((100vw - 3rem) * 0.5625)"}`,
          }}
        />
      ))}
    </S.ImgSection>
  );
}
