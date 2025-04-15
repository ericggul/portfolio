// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";
import ResearchBlogPost from "@/components/ResearchBlogPost";
import type { Metadata, ResolvingMetadata } from "next";
import type { BlogPost } from "@/lib/blog"; // Import the BlogPost type

type Props = {
  params: { slug: string };
};

// Generate metadata - updated for direct BlogPost retrieval
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  try {
    // getBlogPostBySlug now returns BlogPost | null directly
    const post = await getBlogPostBySlug(params.slug);

    console.log(post);
    if (!post) {
      return {
        title: "Post Not Found | Jeanyoon Choi Research Blog",
        description: "The requested blog post was not found.",
      };
    }

    // Extract a short description from the content
    const description =
      post.content
        .replace(/\r|\n/g, " ") // Replace newlines with spaces for description
        .trim()
        .substring(0, 150) + "...";

    return {
      title: `${post.title} | Jeanyoon Choi Research Blog`,
      description: description,
    };
  } catch (error) {
    console.error(`[generateMetadata] Error generating metadata for ${params.slug}:`, error);
    return {
      title: "Error | Jeanyoon Choi Research Blog",
      description: "An error occurred while loading this blog post.",
    };
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  try {
    // getBlogPostBySlug now returns BlogPost | null directly
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      return (
        <div style={{ padding: "2rem" }}>
          <h1>Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist or couldn't be loaded.</p>
          <div style={{ marginTop: "1rem" }}>
            <Link href="/research-blog" style={{ color: "blue", textDecoration: "underline" }}>
              ← Back to all posts
            </Link>
          </div>
        </div>
      );
    }

    // Pass the post data to the component
    console.log(`[BlogPostPage] Successfully loaded post: ${post.title}`);
    return <ResearchBlogPost post={post} />;
  } catch (error) {
    console.error(`[BlogPostPage] Error loading post for ${params.slug}:`, error);
    return (
      <div style={{ padding: "2rem" }}>
        <h1>Error Loading Post</h1>
        <p>An error occurred while trying to load this blog post.</p>
        <div style={{ marginTop: "1rem" }}>
          <Link href="/research-blog" style={{ color: "blue", textDecoration: "underline" }}>
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
