import prisma from "@/lib/prisma";
import Works from "@/components/Works";

export default async function WorksPage() {
  const projects = await prisma.project.findMany({
    select: {
      imageNumber: true,
      imageURLBase: true,
      rating: true,
      title: true,
      year: true,
      type: true,
      mdxOrSeperateLink: true,
      id: true,
    },
    orderBy: {
      rating: "desc",
    },
    distinct: ["id"],
  });

  return (
    <>
      <Works projects={projects} />
    </>
  );
}
