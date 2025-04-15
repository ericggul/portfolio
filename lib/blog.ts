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
  const fetchUrl = `${GCS_BASE_URL}/${slug}.json`;
  console.log(`[getBlogPostBySlug] Attempting to fetch: ${fetchUrl}`);

  try {
    const response = await fetch(fetchUrl, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      console.error(`[getBlogPostBySlug] Failed fetch for ${slug}: ${response.status}`);
      throw new Error(`Failed to fetch blog post ${slug}: ${response.status}`);
    }

    // Special handling for slugs containing hyphens (two or more words in title)
    if (slug.includes("-")) {
      // Get the index and post data from index.json
      const indexResponse = await fetch(`${GCS_BASE_URL}/index.json`, {
        next: { revalidate: 60 },
      });

      if (!indexResponse.ok) {
        throw new Error(`Failed to fetch index.json: ${indexResponse.status}`);
      }

      const indexData = await indexResponse.json();
      const postMeta = indexData.posts.find((p: any) => p.slug === slug);

      if (!postMeta) {
        console.error(`[getBlogPostBySlug] Post with slug ${slug} not found in index.json`);
        return null;
      }

      // Get the raw text content
      const rawText = await response.text();
      console.log(`[getBlogPostBySlug] Successfully fetched raw text for ${slug}. Length: ${rawText.length}`);

      // Extract content by finding boundaries in the raw text
      // This is more reliable than trying to parse the entire JSON
      try {
        // Look for "content": between quote marks
        const contentStartMatch = rawText.match(/"content":\s*"(.*)/);
        if (!contentStartMatch) {
          throw new Error("Could not locate content start");
        }

        // Build a post object manually using the metadata from index.json
        // and the content extracted from the raw text
        const content = extractContentFromRawText(rawText);

        return {
          id: postMeta.id,
          title: postMeta.title,
          content: content || "Content extraction failed. Please try again later.", // Fallback message
          tags: postMeta.tags || [],
          slug: postMeta.slug,
          created: postMeta.created,
          updated: postMeta.updated,
        };
      } catch (extractError) {
        console.error(`[getBlogPostBySlug] Error extracting content for ${slug}:`, extractError);
        // Still return a post with basic metadata but placeholder content
        return {
          id: postMeta.id,
          title: postMeta.title,
          content: "Unable to load the full content at this time. Please try again later.",
          tags: postMeta.tags || [],
          slug: postMeta.slug,
          created: postMeta.created,
          updated: postMeta.updated,
        };
      }
    }

    // Standard handling for normal slugs
    return await response.json();
  } catch (error) {
    console.error(`[getBlogPostBySlug] Error fetching blog post ${slug}:`, error);
    return null;
  }
}

// Helper function to extract content from raw text without full JSON parsing
function extractContentFromRawText(rawText: string): string {
  try {
    // Find the "content" field in the JSON
    const contentRegex = /"content"\s*:\s*"((?:\\"|[^"])*)"/;
    const match = rawText.match(contentRegex);

    if (!match || !match[1]) {
      throw new Error("Content pattern not found");
    }

    // Get the escaped content string
    let escapedContent = match[1];

    // Unescape the JSON string - handle escaped quotes and backslashes
    let content = escapedContent
      .replace(/\\"/g, '"') // Replace \" with "
      .replace(/\\\\/g, "\\") // Replace \\ with \
      .replace(/\\r\\n/g, "\n") // Replace \r\n with actual newlines
      .replace(/\\n/g, "\n") // Replace \n with actual newlines
      .replace(/\\r/g, "\n"); // Replace \r with actual newlines

    console.log(`[extractContentFromRawText] Successfully extracted content (${content.length} chars)`);

    return content;
  } catch (e) {
    console.error("[extractContentFromRawText] Error:", e);
    return ""; // Empty string on failure
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
