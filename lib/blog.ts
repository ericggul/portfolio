// lib/blog.ts
const GCS_BASE_URL = "https://storage.googleapis.com/portfolio-jyc-blog";

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  tags: string[];
  slug: string;
  created: string;
  updated: string;
}

export interface BlogIndex {
  lastUpdated: string;
  posts: {
    id: string;
    title: string;
    slug: string;
    tags: string[];
    created: string;
    updated: string;
  }[];
}

export async function getAllBlogPosts(): Promise<BlogIndex["posts"]> {
  try {
    const response = await fetch(`${GCS_BASE_URL}/index.json`, {
      next: { revalidate: 60 }, // Revalidate every minute
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog posts: ${response.status}`);
    }

    const data: BlogIndex = await response.json();
    return data.posts.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await fetch(`${GCS_BASE_URL}/${slug}.json`, {
      next: { revalidate: 60 }, // Revalidate every minute
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch blog post: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching blog post ${slug}:`, error);
    return null;
  }
}

// Generate an AI-enhanced version of the content (optional)
export async function generateEnhancedVersion(content: string): Promise<string> {
  try {
    const response = await fetch("/api/enhance-blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content }),
    });

    if (!response.ok) {
      throw new Error(`Failed to enhance content: ${response.status}`);
    }

    const data = await response.json();
    return data.enhancedContent;
  } catch (error) {
    console.error("Error enhancing content:", error);
    return content; // Return original content on error
  }
}
