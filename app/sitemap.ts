import { MetadataRoute } from "next";
import prisma from "@/lib/prisma";
import { getAllBlogPosts } from "@/lib/blog";

// Define the expected shape of a blog post for the sitemap
interface BlogPost {
  slug: string;
  updated: string | number | Date;
  // Add other fields if needed for logic, though slug/updated are primary for sitemap
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const URL = "https://portfolio-jyc.org";

  const staticURLs: MetadataRoute.Sitemap = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${URL}/works`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${URL}/texts`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${URL}/nonequality`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1.0,
    },
  ];

  const texts = await prisma.text.findMany({
    select: {
      id: true,
      title: true,
      tags: true,
      imgURL: true,
      createdAt: true,
    },
  });

  const textsURLs = texts.map((el) => ({
    url: `${URL}/text/${el.id}`,
    lastModified: new Date(),
    changeFrequency: "daily" as const,
    priority: 0.9,
  }));

  const works = await prisma.project.findMany({
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

  const worksURLs = works
    .filter((el) => !el.mdxOrSeperateLink)
    .map((el) => ({
      url: `${URL}/works/${el.id}`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 0.7,
    }));

  // Fetch research blog posts
  const blogPosts: BlogPost[] = await getAllBlogPosts();
  const blogPostURLs = blogPosts.map((post) => ({
    url: `${URL}/research-blog/${post.slug}`,
    lastModified: new Date(post.updated),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const dynamicURLs = [...textsURLs, ...worksURLs, ...blogPostURLs];

  return [...staticURLs, ...dynamicURLs];
}
