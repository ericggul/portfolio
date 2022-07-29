import React from "react";
import * as S from "./styles";

import SingleProject from "foundations/Booking/SingleProject";

import useGeolocation from "utils/hooks/useGeolocation";

export default function Booking({ currentComponent, projects }: any) {
  const geolocation = useGeolocation();

  return (
    <S.Container currentComponent={currentComponent}>
      {projects.map((project: any, i: number) => (
        <SingleProject project={project} geolocation={geolocation} key={i} />
      ))}
    </S.Container>
  );
}
