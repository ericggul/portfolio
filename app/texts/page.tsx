import Texts from "@/components/Texts";

import prisma from "@/lib/prisma";

export default async function TextPage() {
  // fetch data
  const texts: any = await prisma.text.findMany({
    select: {
      id: true,
      title: true,
      imgURL: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <>
      <Texts texts={texts} />
    </>
  );
}
