import styled from "styled-components";
import { FlexCenterStyle } from "@/styles/common";

export const Container = styled.div`
  background: #fff; // Match single post background
  color: #111;
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center; // Center the content column
`;

export const ContentWrapper = styled.div`
  width: 100%;
  max-width: 900px; // Max width for the list content
  flex: 1; // Allow wrapper to grow and fill available vertical space
  overflow-y: auto; // Enable vertical scrolling only when needed
  padding-bottom: 3rem; // Add padding at the bottom of the scrollable area

  /* Optional: Hide scrollbar like single post page */
  &::-webkit-scrollbar {
    display: none !important;
    -webkit-appearance: none;
    width: 0 !important;
    height: 0;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: transparent;
    background-color: transparent;
    outline: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none !important;
`;

export const Title = styled.h1`
  font-size: 2.8rem;
  font-weight: 700;
  color: #000;
  margin-bottom: 2.5rem; // Space below title
`;

export const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); // Responsive grid
  gap: 1.5rem; // Gap between grid items
`;

export const PostItem = styled.div`
  border: 1px solid #eee; // Subtle border
  padding: 1.5rem; // Padding within each item
  border-radius: 8px; // Rounded corners
  background: #fff;
  transition: box-shadow 0.2s ease-in-out, transform 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-2px);
  }

  a {
    text-decoration: none;
    color: inherit; // Inherit color from parent
    display: block; // Make the whole item clickable
    height: 100%;
  }
`;

export const PostTitle = styled.h2`
  font-size: 1.3rem;
  font-weight: 600;
  color: #111;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
`;

export const PostDate = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 0.75rem;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.75rem;

  span {
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    background: #eee;
    color: #333;
    line-height: 1.2;
  }
`;

export const NoPostsMessage = styled.p`
  font-size: 1rem;
  color: #666;
  margin-top: 2rem;
`;
