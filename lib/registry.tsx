"use client";

import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";

import { ServerStyleSheet, StyleSheetManager, createGlobalStyle, ThemeProvider } from "styled-components";
import useResize from "@/utils/hooks/useResize";

export default function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const [windowWidth, windowHeight] = useResize();

  if (typeof window !== "undefined") {
    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={{ windowWidth, windowHeight }}>{children}</ThemeProvider>
      </>
    );
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <GlobalStyle />
      <ThemeProvider theme={{ windowWidth, windowHeight }}>{children}</ThemeProvider>
    </StyleSheetManager>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Times New Roman";
    background: black;
    color: white;
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1, h2, h3, h4, h5, h6, p{
    margin: 0;
    padding: 0;
  }

  @font-face{
    font-family: 'anton';
    src: url('/assets/fonts/Anton-Regular.ttf');
  }

  @font-face{
    font-family: 'bungee-shade';
    src: url('/assets/fonts/BungeeShade-Regular.ttf');
  }

  @font-face{
    font-family: 'coming-soon';
    src: url('/assets/fonts/ComingSoon-Regular.ttf');
  }
  
`;
