import * as S from "./styles";
import Image from "next/image";

import useDistance from "utils/hooks/useDistance";

export default function SingleProject({ project, geolocation }: any) {
  const { distance, permittedStatus } = useDistance({ lat: project.lat, lng: project.lng, currPos: geolocation.pos, permittedStatus: geolocation.permittedStatus });

  return (
    <S.Container>
      <S.ImgContainer>
        <Image src={project.land.baseImageURL ? project.land.baseImageURL + project.imageURLs[0] : project.imageURLs[0]} alt="Portfolio Image" layout="fill" priority objectFit="cover" />
        <S.Land>{project.land.title}</S.Land>
      </S.ImgContainer>
      <S.ContentsContainer>
        <S.Rating>
          <S.RatingStar>
            <Image src={"/assets/images/Booking/star.svg"} alt="Star" layout="fill" />
          </S.RatingStar>
          <S.RatingText>
            {project.rating.toFixed(1)}
            <span>({project.ratingCount} Reviews)</span>
          </S.RatingText>
        </S.Rating>
        <S.ContentsLeft>
          {/* {permittedStatus && <S.Distance>{Math.round(distance / 1000)}km</S.Distance>} */}
          <S.Medium>
            {project.medium} &#x2022; {project.date}
          </S.Medium>
          <S.ShortDescription>{project.shortDescription}</S.ShortDescription>
          <S.Title>{project.title}</S.Title>
        </S.ContentsLeft>
      </S.ContentsContainer>
    </S.Container>
  );
}
