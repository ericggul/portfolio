import prisma from "@/lib/prisma";
import Project from "@/components/Project";

export default async function ProjectsPage() {
  const res = await prisma.project.findMany();
  const allImages = res
    .reduce((acc: any, curr: any) => {
      acc = [
        ...acc,
        ...curr.imageURLs.map((el: string) => ({
          url: "/assets" + curr.imageURLBase + "/" + el,
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
