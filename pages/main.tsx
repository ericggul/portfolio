//data retrive
import { GetServerSideProps, GetStaticProps } from "next";
import { useRouter } from "next/router";
import prisma from "lib/prisma";

import { useEffect, useState } from "react";

import dynamic from "next/dynamic";

const TicTacToe = dynamic(() => import("components/Main/TicTacToe"), { ssr: false });
const ProjectList = dynamic(() => import("components/Main/ProjectList"), { ssr: false });

function Main({ projects }: any) {
  const router = useRouter();
  const { givenComponent } = router.query;

  // const [currentComponent, setCurrentComponent] = useState<any>(typeof window !== "undefined" && sessionStorage.getItem("tictactoePlayed") === "played" ? "ProjectList" : givenComponent);
  const [currentComponent, setCurrentComponent] = useState<any>("projectList");

  useEffect(() => {
    if (currentComponent === "tictactoe") {
      if (typeof window !== "undefined" && sessionStorage.getItem("tictactoePlayed") === "played") {
        setCurrentComponent("projectList");
      }
    }
  }, [currentComponent]);

  return (
    <>
      <TicTacToe moveToNextComponent={() => setCurrentComponent("projectList")} currentComponent={currentComponent} />
      {currentComponent === "projectList" && <ProjectList currentComponent={currentComponent} projects={projects} scrollTo={router.query.scrollTo || null} />}
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
