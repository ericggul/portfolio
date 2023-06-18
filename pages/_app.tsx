import useResize from "utils/hooks/useResize";

import { DefaultSeo } from "next-seo";
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

  const description = "Jeanyoon Choi is a Web-Based New Media Artist focusing on Multi-Device Web Artwork practice.";

  return (
    <>
      <Head>
        <title>Jeanyoon Choi Portfolio</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width, user-scalable=no" />

        <meta charSet="utf-8" />
        <html lang="en" />
        <meta property="og:type" content="website" />
        <meta property="twitter:card" content="summary_large_image" />

        <title>{"Jeanyoon Choi Portfolio"}</title>
        <meta name="title" content={"Jeanyoon Choi Portfolio"} />
        <meta property="og:title" content={"Jeanyoon Choi Portfolio"} />
        <meta property="twitter:title" content={"Jeanyoon Choi Portfolio"} />

        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="twitter:description" content={description} />

        <link rel="canonical" href={"https://www.portfolio-jyc.org"} />
        <meta property="twitter:url" content={"https://www.portfolio-jyc.org"} />
        <meta property="og:url" content={"https://www.portfolio-jyc.org"} />
        <DefaultSeo title="Jeanyoon Choi Portfolio" description="New Media Artist Jeanyoon Choi's Portfolio. Multi-Device Web Artwork, Web Art, Net Art." />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={{ windowWidth, windowHeight }}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
