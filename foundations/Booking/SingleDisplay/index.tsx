import * as S from "./styles";
import Image from "next/image";

export default function SingleDisplay({ project }: any) {
  return (
    <S.Container>
      <S.ImgContainer>
        <Image src={`/assets/images/Test.png`} alt="Portfolio Image" layout="fill" priority objectFit="cover" />
        <S.Land>{project.land}</S.Land>
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
          <S.Distance>{project.distance}</S.Distance>
          <S.Medium>{project.medium}</S.Medium>
          <S.ShortDescription>{project.shortDescription}</S.ShortDescription>
          <S.Title>{project.title}</S.Title>
        </S.ContentsLeft>
      </S.ContentsContainer>
    </S.Container>
  );
}
