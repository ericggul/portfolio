//data retrive
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import prisma from "lib/prisma";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const TicTacToe = dynamic(() => import("components/Main/TicTacToe"), { ssr: false });
const Booking = dynamic(() => import("components/Main/Booking"), { ssr: false });

function Main({ projects }: any) {
  const router = useRouter();
  const { givenComponent } = router.query;

  // const [currentComponent, setCurrentComponent] = useState<any>(typeof window !== "undefined" && sessionStorage.getItem("tictactoePlayed") === "played" ? "booking" : givenComponent);
  const [currentComponent, setCurrentComponent] = useState<any>("booking");

  useEffect(() => {
    if (currentComponent === "tictactoe") {
      if (typeof window !== "undefined" && sessionStorage.getItem("tictactoePlayed") === "played") {
        setCurrentComponent("booking");
      }
    }
  }, [currentComponent]);

  return (
    <>
      <TicTacToe moveToNextComponent={() => setCurrentComponent("booking")} currentComponent={currentComponent} />
      {currentComponent === "booking" && <Booking currentComponent={currentComponent} projects={projects} scrollTo={router.query.scrollTo || null} />}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
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
