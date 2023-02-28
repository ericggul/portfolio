//data retrive
import dynamic from "next/dynamic";

import { NextSeo } from "next-seo";

const Vis = dynamic(() => import("components/Visualisation"), { ssr: false });

function Home() {
  return (
    <>
      <NextSeo title="Jeanyoon Choi Portfolio" description="Web-based New Media Artist Jeanyoon Choi's Portfolio." />
      <Vis />
    </>
  );
}

export default Home;
