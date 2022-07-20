import useResize from "utils/hooks/useResize";
import { useMemo } from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
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

function MyApp({ Component, pageProps }: AppProps) {
  const [windowWidth, windowHeight] = useResize();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ windowWidth, windowHeight }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
