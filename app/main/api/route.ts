import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export default async function handler() {
  const res = await prisma.project.findMany({
    //select all
  });
  console.log(res);

  return NextResponse.json(res);
}
