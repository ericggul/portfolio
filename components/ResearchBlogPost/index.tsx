"use client";
import Link from "next/link";
import * as S from "./styles";

// Define the expected structure of the post prop
interface PostData {
  title: string;
  tags: string[];
  updated: string | number | Date;
  content: string;
  slug: string; // Include slug if needed for other links/logic
}

interface ResearchBlogPostProps {
  post: PostData;
}

export default function ResearchBlogPost({ post }: ResearchBlogPostProps) {
  console.log(post);

  if (!post) {
    // Handle case where post data is missing, though the page should handle this
    return (
      <S.Container>
        <S.Contents>
          <Link href="/research-blog">
            <h6>&#x2190; Back to all posts</h6>
          </Link>
          <h1>Post Not Found</h1>
          <p>The requested post could not be loaded.</p>
        </S.Contents>
      </S.Container>
    );
  }

  return (
    <S.Container suppressHydrationWarning>
      {" "}
      {/* Added suppressHydrationWarning based on Text component */}
      <S.Contents>
        <Link href="/research-blog">
          <h6>&#x2190; Back to all posts</h6>
        </Link>

        <h1>{post.title}</h1>

        <h4>Updated: {new Date(post.updated).toLocaleDateString("en-US")}</h4>

        {post.tags && post.tags.length > 0 && (
          <S.Tags>
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </S.Tags>
        )}

        {/* Use a div with a class for potential prose-like styling if needed, or style p directly */}
        <div className="prose-content">
          {post.content.split(/\r\r|\n\n/).map((paragraph, i) => {
            // Trim only trailing whitespace, keep leading whitespace for indentation
            const processedParagraph = paragraph.replace(/\s+$/, "");
            if (processedParagraph) {
              // Use <pre> for robust whitespace/newline preservation
              // Split paragraph into lines to check for bullet points
              const lines = processedParagraph.split("\n");
              return (
                <pre key={i}>
                  {lines.map((line, j) => {
                    // Check for common bullet point markers (adjust regex as needed)
                    const isListItem = /^\s*[-*•]/.test(line);
                    const trimmedLine = line.replace(/^\s*[-*•]\s*/, ""); // Remove marker and leading space
                    if (isListItem) {
                      return (
                        <span key={j} className="list-item">
                          {trimmedLine}
                          {/* Add newline unless it's the very last line of the paragraph */}
                          {j < lines.length - 1 && "\n"}
                        </span>
                      );
                    } else {
                      // Render regular lines as text nodes within pre
                      return (
                        <span key={j}>
                          {line}
                          {/* Add newline unless it's the very last line of the paragraph */}
                          {j < lines.length - 1 && "\n"}
                        </span>
                      );
                    }
                  })}
                </pre>
              );
            }
            return null;
          })}
        </div>

        {/* Optional Footer Content */}
        <br />
        <br />
        <p>Text written by Jeanyoon Choi</p>
        <p>Ⓒ Jeanyoon Choi, {new Date().getFullYear()}</p>
        <br />
        <br />
      </S.Contents>
    </S.Container>
  );
}
