//data retrive
import Intro from "components/Intro";
import { NextSeo } from "next-seo";

function Home() {
  return (
    <>
      <NextSeo title="Jeanyoon Choi Portfolio" description="Web-based New Media Artist Jeanyoon Choi's Portfolio." />
      <Intro />
    </>
  );
}

export default Home;
