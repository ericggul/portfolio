// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";
import ResearchBlogPost from "@/components/ResearchBlogPost";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Fetch the blog post
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <div style={{ marginTop: "1rem" }}>
          <Link href="/research-blog" style={{ color: "blue", textDecoration: "underline" }}>
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  // Pass the fetched post data to the component
  return <ResearchBlogPost post={post} />;
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
