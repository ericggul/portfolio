import React from "react";
import * as S from "./styles";

//container
import SingleProject from "foundations/Booking/SingleProject";

//hooks
import useResize from "utils/hooks/useResize";
import useGeolocation from "utils/hooks/useGeolocation";

export default function Booking({ currentComponent, projects }: any) {
  const geolocation = useGeolocation();
  const [windowWidth, windowHeight] = useResize();

  console.log(Array(10).fill(projects).flat());

  return (
    <S.Container currentComponent={currentComponent}>
      {Array(30)
        .fill(projects)
        .flat()
        .map((project: any, i: number) => (
          <SingleProject project={project} geolocation={geolocation} idx={i} key={i} />
        ))}
    </S.Container>
  );
}
