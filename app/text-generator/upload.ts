import prisma from "@/lib/prisma";

export default async function upload({ data }: any) {
  try {
    const res = await prisma.text.create({
      data,
    });
    console.log(res);
  } catch (e) {
    console.log(e);
  }
}
