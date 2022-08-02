import { useState, useEffect, useMemo } from "react";
import * as S from "./styles";

import Link from "next/link";
import Image from "next/image";

//utils
import useModal from "utils/hooks/useModal";

//containers
import InfoSection from "foundations/Project/InfoSection";
import ImageSection from "foundations/Project/ImageSection";
import Recommendation from "foundations/Project/Recommendation";
import RatingModal from "foundations/Project/RatingModal";

export default function Project({ project, recommendedProjects }: any) {
  const { modalOpen, handleModalOpen, handleModalClose } = useModal();

  return (
    <S.Container>
      <S.Contents>
        <Link href="/main">
          <S.BackNavigator>Back to List</S.BackNavigator>
        </Link>
        <ImageSection project={project} isItUpper={true} />
        <InfoSection project={project} handleModalOpen={handleModalOpen} />
        <ImageSection project={project} isItUpper={false} />
        <Recommendation recommendedProjects={recommendedProjects} />
        <RatingModal modalOpen={modalOpen} handleModalClose={handleModalClose} />
      </S.Contents>
    </S.Container>
  );
}
