import React, { useState, useEffect } from "react";
import * as S from "./styles";

//foundations
import SortAndFilter from "foundations/Main/SortAndFilter";
import SingleProject from "foundations/Main/SingleProject";
import BackToTop from "foundations/Main/BackToTop";

export default function Booking({ currentComponent, projects, scrollTo }: any) {
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

  //scrollTo
  useEffect(() => {
    if (scrollTo) {
      const target: any = document.querySelector(`.project-${scrollTo}`);
      if (target) {
        window.scrollTo({ top: target.offsetTop, behavior: "smooth" });
      }
    }
  }, [scrollTo]);

  return (
    <S.Whole currentComponent={currentComponent}>
      <S.Inner>
        <SortAndFilter filteredProjects={filteredProjects} handleSortChange={handleSortChange} />
        <S.ProjectsContainer>
          {filteredProjects.map((project: any, i: number) => (
            <div key={i} className={`project-${project.id}`}>
              <SingleProject project={project} idx={i} />
            </div>
          ))}
        </S.ProjectsContainer>
      </S.Inner>
      <BackToTop />
    </S.Whole>
  );
}
