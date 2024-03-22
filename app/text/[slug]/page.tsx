import prisma from "@/lib/prisma";
import Text from "@/components/Text";

import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params, searchParams }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  // read route params
  const id = params.slug;

  // fetch data
  const textData: any = await prisma.text.findUnique({
    where: {
      id: params.slug,
    },
  });

  return {
    title: textData.title + " | Jeanyoon Choi",
    description: textData.originalText,
    openGraph: {
      images: [textData.imgURL || undefined],
    },
  };
}

export default async function TextPage({ params, searchParams }: Props) {
  const textData: any = await prisma.text.findUnique({
    where: {
      id: params.slug,
    },
  });

  return (
    <>
      <Text textData={textData} />
    </>
  );
}
