import { GetServerSideProps } from "next";
import prisma from "lib/prisma";
import ErrorPage from "next/error";

//components
import Project from "components/Project";

export default function Title({ project, recommendedProjects }: any) {
  return <>{project ? <Project project={project} recommendedProjects={recommendedProjects} /> : <ErrorPage statusCode={404} />}</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const project = await prisma.project.findUnique({
    where: {
      title: String(context.query.title),
    },
    include: {
      land: {
        select: {
          id: true,
          title: true,
          medium: true,
          baseLandURL: true,
          baseImageURL: true,
        },
      },
    },
  });

  const primaryRelated = null;

  const sameLandProjects = await prisma.project.findMany({
    where: {
      AND: [
        {
          land: {
            id: project?.land?.id,
          },
        },
        {
          NOT: {
            title: project?.title,
          },
        },
      ],
    },
    take: 5,
    orderBy: {
      ratingCount: "desc",
    },
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

  const popularProjects = await prisma.project.findMany({
    where: {
      NOT: {
        title: project?.title,
      },
    },
    take: 10,
    orderBy: {
      ratingCount: "desc",
    },
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

  const getArrayRandom = (array: any) => array[Math.floor(Math.random() * array.length)];
  const getArrayTwoRandoms = (array: any) => array.sort(() => Math.random() < 0.5).slice(0, 2);

  let recommendedProjects = [];
  if (primaryRelated) {
    recommendedProjects = [...primaryRelated, getArrayTwoRandoms(popularProjects)];
  } else {
    recommendedProjects = [...getArrayTwoRandoms(sameLandProjects), getArrayRandom(popularProjects)];
  }
  console.log(recommendedProjects);

  return {
    props: { project, recommendedProjects },
  };
};
