import { getAllBlogPosts, getBlogPostBySlug } from "@/lib/blog";
import ResearchBlogPost from "@/components/ResearchBlogPost";
import type { Metadata } from "next";

// Metadata for the aggregate page
export const metadata: Metadata = {
  title: "All Research Blog Posts | Jeanyoon Choi",
  description: "An aggregation of all research blog posts by Jeanyoon Choi.",
  // Prevent indexing of this aggregate page if desired, as content is duplicated
  // robots: { index: false, follow: true },
};

// Define the shape of a single post fetched
interface SinglePostData {
  title: string;
  content: string;
  updated: string | number | Date; // Keep track of latest update
  slug: string; // Need slug to fetch full post
}

// Define the shape of the post data returned by the list function (if different)
interface PostListItem {
  slug: string;
  updated: string | number | Date; // Keep track of latest update for initial sort
}

// Define the shape of the aggregated post object passed to the component
interface AggregatedPostData {
  title: string;
  tags: string[]; // Keep tags empty or aggregate them if needed
  updated: string | number | Date;
  content: string;
  slug: string; // Static slug for this page
}

export default async function AllBlogPostsPage() {
  // 1. Fetch slugs and update dates for sorting
  const postListItems: PostListItem[] = await getAllBlogPosts();

  // Optional: Sort posts based on updated date before fetching full content
  postListItems.sort((a, b) => new Date(b.updated).getTime() - new Date(a.updated).getTime());

  // 2. Fetch full data for each post sequentially
  let combinedContent = "";
  let latestUpdate = new Date(0);

  for (const item of postListItems) {
    const post: SinglePostData | null = await getBlogPostBySlug(item.slug);
    if (post) {
      // Add the post title as a header before its content
      combinedContent += `## ${post.title}\n\n`;
      combinedContent += `${post.content}\n\n\n`;

      const postDate = new Date(post.updated);
      if (postDate > latestUpdate) {
        latestUpdate = postDate;
      }
    } else {
      console.warn(`Could not fetch content for slug: ${item.slug}`);
    }
  }

  // 3. Create the aggregated post object
  const aggregatedPost: AggregatedPostData = {
    title: "All Research Blog Posts",
    tags: [],
    updated: latestUpdate,
    content: combinedContent.trim(),
    slug: "all",
  };

  // 4. Render using the component
  return <ResearchBlogPost post={aggregatedPost} />;
}
