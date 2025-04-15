import styled, { css } from "styled-components";
import { FlexCenterStyle, WholeContainer } from "@/styles/common"; // Assuming common styles exist and are needed

export const Container = styled.div`
  ${FlexCenterStyle}
  justify-content: flex-start; // Align content to the top
  align-items: flex-start;
  background: #fff; // Change background if needed, e.g., white
  color: #111;
  min-height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem); // Assuming theme is provided
  padding: 1.5rem; // Add padding
`;

export const Contents = styled.div`
  width: 100%; // Use full width within padding
  max-width: 800px; // Limit max width for readability
  height: calc(${({ theme }) => theme.windowHeight}px - 4.5rem); // Restore height for scrolling
  padding-bottom: 5rem;
  // margin-left: 1.5rem; // Remove margin, handled by Container padding
  overflow-y: scroll !important; // Restore scrolling
  font-size: 1rem; // Default font size
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"; // Improved font stack
  font-weight: 400; // Normal weight
  transition: opacity 0.3s ease-in-out;

  user-select: text;

  a {
    cursor: pointer;
    color: #0070f3; // Example link color
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1.05rem; // Slightly larger paragraph font size
    line-height: 1.8; // Increased line height for readability
    margin: 0 0 1.2em 0; // Consistent bottom margin for paragraphs
    color: #222; // Slightly darker text color
    font-weight: 400;
  }

  br {
    content: "";
    display: block;
    margin-bottom: 0.5em; // Adjust space for explicit line breaks if needed
  }

  span {
    transition: all 0.2s ease-in-out;
  }

  h1 {
    font-size: 2.8rem; // Slightly larger title
    font-weight: 700; // Bold title
    margin: 0 0 0.75rem 0; // Adjust title margins
    color: #000;
    line-height: 1.2;
  }

  // Removed h5 styling as blog post content might use markdown headers

  // Back link styling
  h6 {
    font-size: 1rem;
    margin: 0 0 2.5rem 0; // Increase space below back link
    font-style: normal; // Non-italic
    font-weight: 500;
    cursor: pointer;
    color: #0070f3;
    &:hover {
      text-decoration: underline;
    }
  }

  // Date/Meta styling
  h4 {
    font-size: 0.9rem;
    margin: 0 0 1.5rem 0; // Space below date/meta
    font-style: normal; // Non-italic
    color: #555; // Slightly darker gray color for meta text
    font-weight: 400;
    line-height: 1.4;
  }

  img {
    max-width: 100%; // Responsive images
    height: auto; // Maintain aspect ratio
    margin: 2rem 0; // Increase image margin
  }

  /* Restore scrollbar hiding */
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

  // General prose styling (apply to the content div if not using Tailwind's @apply prose)
  .prose-content {
    p {
      margin-bottom: 1.2em;
    }
    // Add other prose styles here if needed (headings, lists, etc.)
    // Example: Improve link styling within content
    a {
      color: #0070f3;
      text-decoration: underline;
      &:hover {
        color: #005bb5;
      }
    }
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; // Use gap for spacing
  margin: 1rem 0 1.5rem 0; // Adjust margins

  span {
    // Changed from p to span for semantic correctness
    font-size: 0.8rem;
    padding: 0.3rem 0.8rem;
    border-radius: 0.5rem;
    background: #eee; // Lighter tag background
    color: #333; // Darker tag text
    cursor: default; // No cursor pointer unless tags are links
    line-height: 1.2;
  }
`;

// Removed unused styled components like UpperInfo, OtherProjectsSection, ImgWrapper, SingleEl
// Add specific styles for Research Blog if needed
