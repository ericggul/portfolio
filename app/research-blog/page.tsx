// app/research-blog/page.tsx
import { getAllBlogPosts } from "@/lib/blog";
import ResearchBlogList from "@/components/ResearchBlogList";
import type { Metadata } from "next";

// Add metadata for the page
export const metadata: Metadata = {
  title: "Research Blog | Jeanyoon Choi",
  description: "Explorations and findings in technology, art, and AI by Jeanyoon Choi.",
  // Add other relevant metadata like openGraph images if desired
};

export default async function BlogPage() {
  // Fetch all blog posts
  const posts = await getAllBlogPosts();

  // Render the styled list component, passing the posts data
  return <ResearchBlogList posts={posts} />;
}
