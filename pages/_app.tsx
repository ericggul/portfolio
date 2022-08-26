import useResize from "utils/hooks/useResize";
import { useMemo } from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from "next/head";

//pre-import css
import "react-toastify/dist/ReactToastify.min.css";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Times New Roman";
  }

  // a {
  //   color: inherit;
  //   text-decoration: none;
  // }

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

function MyApp({ Component, pageProps }: AppProps) {
  const [windowWidth, windowHeight] = useResize();

  return (
    <>
       <Head>
        <title>Jeanyoon Choi Portfolio</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={{ windowWidth, windowHeight }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
