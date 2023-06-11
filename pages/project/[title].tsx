import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";
import prisma from "lib/prisma";
import ErrorPage from "next/error";

import Head from "next/head";
import { useMemo } from "react";

//components
import Project from "components/Project";

export default function Title({ project, recommendedProjects }: any) {
  const projectURL = useMemo(() => `https://www.portfolio-jyc.org/project/${project.title}`, [project]);
  const seoTitle = useMemo(() => `${project.title} | Jeanyoon Choi Portfolio`, [project]);

  return (
    <>
      <Head>
        <title>Jeanyoon Choi Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />

        <meta charSet="utf-8" />
        <html lang="en" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />

        <title>{seoTitle}</title>
        <meta name="title" content={seoTitle} />
        <meta property="og:title" content={seoTitle} />
        <meta property="twitter:title" content={seoTitle} />

        <meta name="description" content={project.longDescription} />
        <meta property="og:description" content={project.longDescription} />
        <meta property="twitter:description" content={project.longDescription} />

        <link rel="canonical" href={projectURL} />
        <meta property="twitter:url" content={projectURL} />
        <meta property="og:url" content={projectURL} />
      </Head>
      {project ? <Project project={project} recommendedProjects={recommendedProjects} /> : <ErrorPage statusCode={404} />}
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await prisma.project.findMany({
    select: {
      title: true,
    },
  });

  return {
    paths: paths.map((path) => ({
      params: {
        title: path.title,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = await prisma.project.findUnique({
    where: {
      title: String(context.params?.title),
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

  return {
    props: { project, recommendedProjects },
  };
};
