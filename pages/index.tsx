//data retrive
import dynamic from "next/dynamic";

import { NextSeo } from "next-seo";

const Intro = dynamic(() => import("components/Intro"), { ssr: false });

function Home() {
  return (
    <>
      <NextSeo title="Jeanyoon Choi Portfolio" description="Web-based New Media Artist Jeanyoon Choi's Portfolio." />
      <Intro />
    </>
  );
}

export default Home;
