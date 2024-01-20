import prisma from "@/lib/prisma";
import Works from "@/components/Works";

export default async function WorksPage() {
  const res = await prisma.project.findMany({
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
  });
  const allImages = res
    .sort((a: any, b: any) => -a.rating + b.rating)
    .reduce((acc: any, curr: any) => {
      acc = [
        ...acc,
        ...new Array(parseInt(curr.imageNumber)).fill(0).map((_, i: number) => ({
          url: "/assets" + curr.imageURLBase + "/" + (i + 1).toString() + ".webp",
          imgIdx: i + 1,
          ...curr,
        })),
      ];
      return acc;
    }, [])
    .sort((a: any, b: any) => Math.floor(a.imgIdx / a.rating) / a.rating - Math.floor(b.imgIdx / b.rating) / b.rating);

  return (
    <>
      <Works allImages={allImages} />
    </>
  );
}
