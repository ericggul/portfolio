import Texts from "@/components/Texts";

import prisma from "@/lib/prisma";

export default async function TextPage() {
  // fetch data
  const texts: any = await prisma.text.findMany({
    select: {
      id: true,
      title: true,
      tags: true,
      imgURL: true,
      createdAt: true,
    },
  });

  return (
    <>
      <Texts
        texts={texts.sort((a: any, b: any) => {
          return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        })}
      />
    </>
  );
}
