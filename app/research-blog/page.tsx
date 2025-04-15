// app/research-blog/page.tsx
import { getAllBlogPosts } from "@/lib/blog";
import ResearchBlogList from "@/components/ResearchBlogList";

export default async function BlogPage() {
  // Fetch all blog posts
  const posts = await getAllBlogPosts();

  // Render the styled list component, passing the posts data
  return <ResearchBlogList posts={posts} />;
}
