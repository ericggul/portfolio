// app/blog/[slug]/page.tsx
import { getBlogPostBySlug, getAllBlogPosts, generateEnhancedVersion } from "@/lib/blog";
import Link from "next/link";

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  // Fetch the blog post
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    return (
      <div>
        <h1 className="text-3xl font-bold mb-6">Post Not Found</h1>
        <p>The blog post you're looking for doesn't exist.</p>
        <div className="mt-4">
          <Link href="/research-blog" className="text-blue-600 hover:underline">
            ← Back to all posts
          </Link>
        </div>
      </div>
    );
  }

  // Generate enhanced version (optional)
  // If you don't want to use OpenAI, you can comment out this line
  // const enhancedContent = await generateEnhancedVersion(post.content);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>

      {post.tags && post.tags.length > 0 && (
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="text-gray-600 mb-6">Updated: {new Date(post.updated).toLocaleDateString()}</div>

      <div className="prose max-w-none mb-8">
        <h2>Original Version</h2>
        {post.content.split("\n\n").map((paragraph, i) => paragraph.trim() && <p key={i}>{paragraph}</p>)}
      </div>

      {/* Only render this section if you're using OpenAI */}
      {/* {enhancedContent && (
        <div className="prose max-w-none mb-8 border-t pt-6">
          <h2>Enhanced Version</h2>
          {enhancedContent.split("\n\n").map((paragraph, i) => (
            paragraph.trim() && <p key={i}>{paragraph}</p>
          ))}
        </div>
      )} */}

      <div className="mt-8">
        <Link href="/research-blog" className="text-blue-600 hover:underline">
          ← Back to all posts
        </Link>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}
