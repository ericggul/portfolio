//data retrive
import { GetServerSideProps } from "next";
import prisma from "lib/prisma";

import { useState } from "react";
import TicTacToe from "components/Main/TicTacToe";
import Booking from "components/Main/Booking";

function Main({ projects, givenComponent }: any) {
  console.log(givenComponent);
  const [currentComponent, setCurrentComponent] = useState<string>(givenComponent);

  return (
    <>
      <TicTacToe moveToNextComponent={() => setCurrentComponent("booking")} currentComponent={currentComponent} />
      <Booking currentComponent={currentComponent} projects={projects} />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
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
