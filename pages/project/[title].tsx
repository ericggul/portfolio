import { GetServerSideProps } from "next";
import prisma from "lib/prisma";
import ErrorPage from "next/error";

//components
import Project from "components/Project";

export default function Title({ project }: any) {
  console.log(project);
  return <>{project ? <Project project={project} /> : <ErrorPage statusCode={404} />}</>;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const project = await prisma.project.findUnique({
    where: {
      title: String(context.query.title),
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

  return {
    props: { project },
  };
};
