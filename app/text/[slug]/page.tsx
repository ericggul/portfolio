import prisma from "@/lib/prisma";
import Text from "@/components/Text";

export default async function TextPage({ params }: { params: { slug: string } }) {
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
