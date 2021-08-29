/**
 * Made by Haowen Liu in 2021
 * Landing page.
 */

import dynamic from "next/dynamic";
import Head from "next/head";

const LandingMain = dynamic(() => import("../components/Landing/LandingMain"), {
  ssr: false,
});

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Berly Dai Portfolio</title>
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main>
        <LandingMain></LandingMain>
      </main>
      <footer></footer>
    </>
  );
};

export default Home;
