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
    let tempProjects = [];
    if (type === "rating") {
      tempProjects = copiedProjects.sort((a: any, b: any) => b.rating - a.rating);
    } else if (type === "date") {
      tempProjects = copiedProjects.sort((a: any, b: any) => {
        const aDate = a.date.split(" ");
        const bDate = b.date.split(" ");
        const MONTH_ARRAY = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const aMonth = MONTH_ARRAY.indexOf(aDate[0]);
        const bMonth = MONTH_ARRAY.indexOf(bDate[0]);
        const aYear = parseInt(aDate[1]);
        const bYear = parseInt(bDate[1]);
        console.log(aYear, bYear, aMonth, bMonth);
        if (aYear === bYear) {
          return bMonth - aMonth;
        } else {
          return bYear - aYear;
        }
      });
    } else if (type === "land") {
      const LAND_ARRAY = ["Shitga", "Festival", "Please Open a Console", "Laboratory Occupied", "Off Line", "Tril.ogy", "Others"];

      tempProjects = copiedProjects.sort((a: any, b: any) => {
        const aLand = LAND_ARRAY.indexOf(a.land);
        const bLand = LAND_ARRAY.indexOf(b.land);
        return aLand - bLand;
      });
    }

    if (dir === "asc") {
      tempProjects = tempProjects.reverse();
    }

    setFilteredProjects(tempProjects);
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
