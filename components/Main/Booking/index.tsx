import React from "react";
import * as S from "./styles";

//container
import SingleProject from "foundations/Booking/SingleProject";

//hooks
import useResize from "utils/hooks/useResize";
import useGeolocation from "utils/hooks/useGeolocation";

export default function Booking({ currentComponent, projects }: any) {
  return (
    <S.Container currentComponent={currentComponent}>
      {Array(30)
        .fill(projects)
        .flat()
        .map((project: any, i: number) => (
          <SingleProject project={project} idx={i} key={i} />
        ))}
    </S.Container>
  );
}
