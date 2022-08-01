import { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

//containers
import InfoSection from "foundations/Project/InfoSection";
import ImageSection from "foundations/Project/ImageSection";
import Recommendation from "foundations/Project/Recommendation";

export default function Project({ project }: any) {
  return (
    <S.Container>
      <S.Contents>
        <Link href="/main">
          <S.BackNavigator>Go Back</S.BackNavigator>
        </Link>
        <ImageSection project={project} isItUpper={true} />
        <InfoSection project={project} />
        <ImageSection project={project} isItUpper={false} />
        <Recommendation project={project} />
      </S.Contents>
    </S.Container>
  );
}
