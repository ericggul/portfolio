import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";

// Mock dynamic content fetching
async function fetchDynamicSlugs() {
  const res = await prisma.project.findMany({
    select: {
      title: true,
    },
  });
  console.log(res);

  // Your fetching logic here
  return {
    works: ["project-1", "project-2", "project-3"],
    texts: ["blog-post-1", "blog-post-2", "blog-post-3"],
  };
}

export async function generateSitemap() {
  const dynamicSlugs = await fetchDynamicSlugs();

  const dynamicEntries = [
    ...dynamicSlugs.works.map((slug) => ({
      url: `https://portfolio-jyc.org/works/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    })),
    ...dynamicSlugs.texts.map((slug) => ({
      url: `https://portfolio-jyc.org/texts/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    })),
  ];

  const staticEntries = [
    {
      url: "https://portfolio-jyc.org",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://portfolio-jyc.org/about",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://portfolio-jyc.org/works",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://portfolio-jyc.org/texts",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://portfolio-jyc.org/nonequality",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  return staticEntries.concat(dynamicEntries);
}

// Note: This export is asynchronous due to dynamic data fetching
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return generateSitemap();
}
