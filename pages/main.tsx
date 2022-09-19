//data retrive
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";

import { useEffect, useState } from "react";
import TicTacToe from "components/Main/TicTacToe";
import Booking from "components/Main/Booking";

function Main({ projects, givenComponent }: any) {
  const [currentComponent, setCurrentComponent] = useState<string>(sessionStorage.getItem("tictactoePlayed") === "played" ? "booking" : givenComponent);

  return (
    <>
      <TicTacToe moveToNextComponent={() => setCurrentComponent("booking")} currentComponent={currentComponent} />
      {currentComponent === "booking" && <Booking currentComponent={currentComponent} projects={projects} />}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const projects = await prisma.project.findMany({
    include: {
      land: {
        select: {
          title: true,
          medium: true,
          baseLandURL: true,
          baseImageURL: true,
        },
      },
    },
  });

  return {
    props: {
      projects,
      givenComponent: context.query.givenComponent || "booking",
    },
  };
};

export default Main;
