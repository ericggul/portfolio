import prisma from "@/lib/prisma";
import Project from "@/components/Project";

export default async function ProjectsPage() {
  const res = await prisma.project.findMany();
  const allImages = res
    .reduce((acc: any, curr: any) => {
      acc = [
        ...acc,
        ...new Array(parseInt(curr.imageNumber)).fill(0).map((_, i: number) => ({
          url: "/assets" + curr.imageURLBase + "/" + (i + 1).toString() + ".webp",
          ...curr,
        })),
      ];
      return acc;
    }, [])
    .sort((a: any, b: any) => -a.rating + b.rating);

  return (
    <>
      <Project allImages={allImages} />
    </>
  );
}
