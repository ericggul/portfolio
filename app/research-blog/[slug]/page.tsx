// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getAllBlogPosts } from "@/lib/blog";
import Link from "next/link";
import ResearchBlogPost from "@/components/ResearchBlogPost";
import type { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  // Add searchParams if needed
};

// Generate metadata for individual post pages
export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  try {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
      return {
        title: "Post Not Found | Jeanyoon Choi Research Blog",
        description: "The requested blog post was not found.",
      };
    }

    // Extract a short description from the content (e.g., first 150 chars)
    const description =
      post.content
        .replace(/\r|\n/g, " ") // Replace newlines with spaces for description
        .trim()
        .substring(0, 150) + "...";

    return {
      title: `${post.title} | Jeanyoon Choi Research Blog`,
      description: description,
      // Optionally add openGraph data like images if available in post data
      // openGraph: {
      //   title: post.title,
      //   description: description,
      //   images: [post.imageUrl || '/default-og-image.png'],
      // },
    };
  } catch (error) {
    console.error("Error generating metadata for blog post:", error);
    return {
      title: "Error | Jeanyoon Choi Research Blog",
      description: "An error occurred while loading this blog post.",
    };
  }
}

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
