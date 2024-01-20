import prisma from "@/lib/prisma";
import Work from "@/components/Work";

function parseSlug(slug: string) {
  return slug.replace(/-/g, " ");
}

export default async function Page({ params }: { params: { slug: string } }) {
  const res = await prisma.project.findUnique({
    where: {
      title: params.slug,
    },
  });

  return (
    <>
      <Work projectData={res} />
    </>
  );
}
