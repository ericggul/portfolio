// app/blog/page.tsx
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";

export default async function BlogPage() {
  // Fetch all blog posts
  const posts = await getAllBlogPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>

      {posts.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <Link href={`/research-blog/${post.slug}`} key={post.id}>
              <div className="border p-4 rounded hover:bg-gray-50 transition-colors">
                <h2 className="text-xl font-semibold">{post.title}</h2>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="text-gray-600 text-sm mt-2">{new Date(post.updated).toLocaleDateString()}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>No blog posts found.</p>
      )}
    </div>
  );
}
