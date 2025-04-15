"use client";
import Link from "next/link";
import * as S from "./styles";

// Define the expected structure for posts, assuming it matches single post needs
interface PostData {
  id: string; // Assuming posts have an ID
  title: string;
  tags: string[];
  updated: string | number | Date;
  slug: string;
}

interface ResearchBlogListProps {
  posts: PostData[];
}

export default function ResearchBlogList({ posts }: ResearchBlogListProps) {
  return (
    <S.Container>
      <S.Title>Research Blog</S.Title>

      <S.ContentWrapper>
        {posts && posts.length > 0 ? (
          <S.PostList>
            {posts.map((post) => (
              <S.PostItem key={post.id}>
                <Link href={`/research-blog/${post.slug}`}>
                  <S.PostTitle>{post.title}</S.PostTitle>
                  <S.PostDate>Updated: {new Date(post.updated).toLocaleDateString("en-US")}</S.PostDate>
                  {post.tags && post.tags.length > 0 && (
                    <S.Tags>
                      {post.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </S.Tags>
                  )}
                </Link>
              </S.PostItem>
            ))}
          </S.PostList>
        ) : (
          <S.NoPostsMessage>No research blog posts found.</S.NoPostsMessage>
        )}
      </S.ContentWrapper>
    </S.Container>
  );
}
