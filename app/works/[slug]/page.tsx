import prisma from "@/lib/prisma";
import Work from "@/components/Work";

export default async function Page({ params }: { params: { slug: string } }) {
  const projectData: any = await prisma.project.findUnique({
    where: {
      id: params.slug,
    },
  });

  const allProjects = await prisma.project.findMany();
  const similarProjects = allProjects
    .filter((el: any) => el.id !== projectData.id)
    .sort((a: any, b: any) => -a.rating + b.rating)
    .slice(0, 10)
    .sort(() => Math.random() - 0.5)
    .slice(0, 5);

  return (
    <>
      <Work projectData={projectData} similarProjects={similarProjects} />
    </>
  );
}
