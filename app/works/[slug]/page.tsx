import prisma from "@/lib/prisma";
import Work from "@/components/Work";

export default async function Page({ params }: { params: { slug: string } }) {
  const [projectData, similarCandidates] = await Promise.all([
    prisma.project.findUnique({
      where: { id: params.slug },
    }),
    prisma.project.findMany({
      where: { NOT: { id: params.slug } },
      select: {
        id: true,
        title: true,
        imageURLBase: true,
        rating: true,
        mdxOrSeperateLink: true,
        year: true,
        type: true,
      },
      orderBy: { rating: "desc" },
      take: 12,
    }),
  ]);

  const similarProjects = (similarCandidates || [])
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <>
      <Work projectData={projectData} similarProjects={similarProjects} />
    </>
  );
}
