import { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

//containers
import InfoSection from "foundations/Project/InfoSection";
import ImageSection from "foundations/Project/ImageSection";
import Recommendation from "foundations/Project/Recommendation";

export default function Project({ project, recommendedProjects }: any) {
  return (
    <S.Container>
      <S.Contents>
        <Link href="/main">
          <S.BackNavigator>Back to List</S.BackNavigator>
        </Link>
        <ImageSection project={project} isItUpper={true} />
        <InfoSection project={project} />
        <ImageSection project={project} isItUpper={false} />
        <Recommendation recommendedProjects={recommendedProjects} />
      </S.Contents>
    </S.Container>
  );
}
