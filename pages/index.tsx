import type { NextPage } from "next";

//data retrive
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";

import { useState } from "react";
import Intro from "components/Intro";
import TicTacToe from "components/TicTacToe";
import Booking from "components/Booking";

function Home({ projects }: any) {
  const [currentComponent, setCurrentComponent] = useState<string>("booking");

  return (
    <>
      {currentComponent === "intro" && <Intro moveToNextComponent={() => setCurrentComponent("tictactoe")} />}
      {currentComponent != "intro" && (
        <>
          <TicTacToe goBackToIntro={() => setCurrentComponent("intro")} moveToNextComponent={() => setCurrentComponent("booking")} currentComponent={currentComponent} />
          <Booking currentComponent={currentComponent} projects={projects} />
        </>
      )}
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

export default Home;
