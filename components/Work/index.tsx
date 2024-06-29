"use client";

//styles
import * as S from "./styles";
import useResize from "@/utils/hooks/useResize";
import { TYPE_CONVERSION } from "@/public/static";
import { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Work({ projectData, similarProjects }: any) {
  const [windowWidth, windowHeight] = useResize();

  console.log(similarProjects);

  return (
    <S.Container>
      {projectData && (
        <S.Contents>
          <Link href="/works">
            <h6>&#x2190; Back to Main</h6>
          </Link>

          <h1>{projectData.title}</h1>
          <p>
            {projectData.medium}, {projectData.year}, {TYPE_CONVERSION[projectData.type] || "Artwork"}
          </p>

          {projectData.videoURL && (
            <S.VideoSection>
              {projectData.videoURL.includes("youtube") && <iframe src={`${projectData.videoURL}?autoplay=1&mute=0&loop=1`} allow="autoplay" title="Youtube" frameBorder="0" />}
              {projectData.videoURL.includes("vimeo") && <iframe src={`${projectData.videoURL}?autoplay=1&mute=0&loop=1`} allow="autoplay" title="Vimeo" frameBorder="0" />}
            </S.VideoSection>
          )}

          <h5>{projectData.shortDescription}</h5>
          <ImgSection windowWidth={windowWidth} imageURLBase={projectData.imageURLBase} imageNumber={projectData.imageNumber} />
          {projectData.longDescription && projectData.longDescription.split("  ").map((firstEl: any, i: number) => firstEl.split("-n-").map((el: any, i: number) => <p key={i}>{el}</p>))}

          {projectData.imageNumber >= 4 && <ImgSection windowWidth={windowWidth} imageURLBase={projectData.imageURLBase} imageNumber={projectData.imageNumber} startFrom={4} />}

          {projectData.projectURL && windowWidth > 768 && (
            <>
              <h2>{"Live Project"}</h2>
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
                <a
                  href={projectData.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  LINK
                </a>
              </h5>
            </>
          )}

          {projectData.projectURL && windowWidth <= 768 && (
            <>
              <h5>
                You can experience the project on DESKTOP or LAPTOP.{" "}
                <a
                  href={projectData.projectURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  LINK
                </a>
              </h5>
            </>
          )}

          {projectData.type === "Personal" && (
            <>
              <h2>Credits</h2>
              <h5
                style={{
                  margin: "0",
                }}
              >
                Artist: Jeanyoon Choi
              </h5>
              <h5
                style={{
                  margin: "0",
                }}
              >
                Software Engineer: Jeanyoon Choi
              </h5>
              <h5
                style={{
                  margin: "0",
                }}
              >
                Interaction Designer: Jeanyoon Choi
              </h5>
            </>
          )}

          <OtherProjectsSection similarProjects={similarProjects} type={TYPE_CONVERSION[projectData.type] || "Artwork"} />
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

function ImgSection({ windowWidth, imageURLBase, imageNumber, startFrom = 1 }: any) {
  const imagesCount = useMemo(() => Math.min(3, imageNumber), [imageNumber]);

  const imgSize = useMemo(() => {
    const width = windowWidth > 768 ? (windowWidth - 48) / imagesCount : windowWidth - 36;
    const height = windowWidth > 768 ? ((windowWidth - 48) / imagesCount) * 0.5625 : (windowWidth - 36) * 0.5625;
    return { width, height };
  }, [windowWidth]);

  return (
    <S.ImgSection>
      {new Array(imagesCount).fill(0).map((_, i) => (
        <>{i + startFrom <= imageNumber && <Image src={`/assets${imageURLBase}/${i + startFrom}.webp`} alt="nonequality" key={i} width={imgSize.width} height={imgSize.height} />}</>
      ))}
    </S.ImgSection>
  );
}

function OtherProjectsSection({ similarProjects, type }: any) {
  const [windowWidth, windowHeight] = useResize();

  return (
    <>
      <h2>View Other Projects</h2>
      <S.OtherProjectsSection>
        {similarProjects.slice(0, windowWidth > 768 ? 5 : 2).map((el: any, i: number) => (
          <SingleEl el={el} key={i} />
        ))}
      </S.OtherProjectsSection>
    </>
  );
}

function SingleEl({ el }: any) {
  const linkTo = useMemo(() => (el ? el.mdxOrSeperateLink || `/works/${el.id}` : "/works"), [el]);

  return (
    <Link href={linkTo} target={linkTo.includes("http") || linkTo.includes("https") ? "_blank" : undefined}>
      <S.SingleEl>
        <img src={`/assets${el.imageURLBase}/1.webp`} alt={el.title} />
        <h4>{el.title}</h4>
      </S.SingleEl>
    </Link>
  );
}
