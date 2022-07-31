import { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

//containers
import InfoSection from "foundations/Project/InfoSection";
import ImageSection from "foundations/Project/ImageSection";

export default function Project({ project }: any) {
  const carouselLength = useMemo(() => project.imageURLs.length, [project.imageURLs]);
  const upperInterval = useMemo(() => ((new Date().getMinutes() % 6) + 3) * 500, []);
  const lowerInterval = useMemo(() => ((new Date().getMinutes() % 6) + 3) * 250, []);
  const [upperCarousel, setUpperCarousel] = useState(0);
  const [lowerCarousel, setLowerCarousel] = useState(0);

  useEffect(() => {
    const upperSetInterval = setInterval(() => {
      setUpperCarousel((upper) => (upper + 1) % carouselLength);
    }, upperInterval);
    const lowerSetInterval = setInterval(() => {
      setLowerCarousel((lower) => (lower === 0 ? carouselLength - 1 : (lower - 1) % carouselLength));
    }, lowerInterval);

    return () => {
      clearInterval(upperSetInterval);
      clearInterval(lowerSetInterval);
    };
  }, [carouselLength, upperInterval, lowerInterval]);

  return (
    <S.Container>
      <S.Contents>
        <Link href="/main">
          <S.BackNavigator>Go Back</S.BackNavigator>
        </Link>
        <ImageSection project={project} isItUpper={true} />
        <InfoSection project={project} />
        <ImageSection project={project} isItUpper={false} />
      </S.Contents>
    </S.Container>
  );
}
