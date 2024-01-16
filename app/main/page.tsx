import prisma from "@/lib/prisma";
// import { useEffect } from "react";
import Project from "@/components/Project";

export default async function ProjectsPage() {
  const res = await prisma.project.findMany();

  return (
    <>
      <Project />
    </>
  );
}
