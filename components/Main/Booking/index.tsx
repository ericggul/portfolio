import React, { useState } from "react";
import * as S from "./styles";

//foundations
import SortAndFilter from "foundations/Booking/SortAndFilter";
import SingleProject from "foundations/Booking/SingleProject";
import BackToTop from "foundations/Booking/BackToTop";

export default function Booking({ currentComponent, projects }: any) {
  const [filteredProjects, setFilteredProjects] = useState<any>(projects.sort((a: any, b: any) => b.rating - a.rating));

  function handleSortChange(type: any, dir: any) {
    let copiedProjects = [...projects];
    if (type === "rating") {
      setFilteredProjects(copiedProjects.sort((a: any, b: any) => a.rating - b.rating));
    } else if (type === "date") {
      setFilteredProjects(
        copiedProjects.sort((a: any, b: any) => {
          const aDate = a.date.split(" ");
          const bDate = b.date.split(" ");
          const MONTH_ARRAY = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          const aMonth = MONTH_ARRAY.indexOf(aDate[0]);
          const bMonth = MONTH_ARRAY.indexOf(bDate[0]);
          const aYear = parseInt(aDate[1]);
          const bYear = parseInt(bDate[1]);
          if (aYear === bYear) {
            return aMonth - bMonth;
          } else {
            return aYear - bYear;
          }
        })
      );
    } else if (type === "land") {
      const LAND_ARRAY = ["Shitga", "Festival", "Please Open a Console", "Laboratory Occupied", "Off Line", "Tril.ogy", "Others"];

      setFilteredProjects(
        copiedProjects.sort((a: any, b: any) => {
          const aLand = LAND_ARRAY.indexOf(a.land);
          const bLand = LAND_ARRAY.indexOf(b.land);
          return bLand - aLand;
        })
      );
    }

    if (dir === "desc") {
      setFilteredProjects((prjt: any) => {
        let curr = [...prjt];
        return curr.reverse();
      });
    }
  }

  return (
    <S.Whole currentComponent={currentComponent}>
      <S.Inner>
        <SortAndFilter filteredProjects={filteredProjects} handleSortChange={handleSortChange} />
        <S.ProjectsContainer>
          {filteredProjects.map((project: any, i: number) => (
            <SingleProject project={project} idx={i} key={i} />
          ))}
        </S.ProjectsContainer>
      </S.Inner>
      <BackToTop />
    </S.Whole>
  );
}
