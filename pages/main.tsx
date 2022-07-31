//data retrive
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";

import { useState } from "react";
import TicTacToe from "components/Main/TicTacToe";
import Booking from "components/Main/Booking";

function Main({ projects }: any) {
  const [currentComponent, setCurrentComponent] = useState<string>("booking");

  return (
    <>
      <TicTacToe goBackToIntro={() => setCurrentComponent("intro")} moveToNextComponent={() => setCurrentComponent("booking")} currentComponent={currentComponent} />
      <Booking currentComponent={currentComponent} projects={projects} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
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
    },
  };
};

export default Main;
