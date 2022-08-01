import { GetServerSideProps } from "next";
import prisma from "lib/prisma";
import ErrorPage from "next/error";

//components
import Project from "components/Project";

export default function Title({ project, recommendedProjects }: any) {
  console.log(project);
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
    take: 2,
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

  const getArrayRandom = (array: any) => array[Math.floor(Math.random() * array.length)];

  const recommendedProjects = [...sameLandProjects, getArrayRandom(popularProjects)].sort(() => Math.random() - 0.5);

  return {
    props: { project, recommendedProjects },
  };
};
