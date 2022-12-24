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
  const [modalHadOpened, setModalHadOpened] = useState(false);
  useEffect(() => {
    if (modalOpen) {
      setModalHadOpened(true);
    }
  }, [modalOpen]);

  console.log(project);
  return (
    <S.Container>
      <S.Contents>
        <Link
          href={{
            pathname: "/main",
            query: { scrollTo: project.id },
          }}
        >
          <S.BackNavigator>Back to List</S.BackNavigator>
        </Link>
        <ImageSection project={project} isItUpper={true} />
        <InfoSection project={project} handleModalOpen={handleModalOpen} modalHadOpened={modalHadOpened} />
        <ImageSection project={project} isItUpper={false} />
        <Recommendation recommendedProjects={recommendedProjects} />
        <RatingModal project={project} modalOpen={modalOpen} handleModalClose={handleModalClose} />
      </S.Contents>
    </S.Container>
  );
}
