/**
 * Made by Haowen Liu in 2021
 * Project page: Haru.
 */

import LogoHeader from "../components/Designs/LogoHeader";
import FullScreenImage from "../components/Designs/FullScreenImage";
import { Height, Width } from "../utils/global_types";
import Head from "next/head";
import { NextPage } from "next";

const Haru: NextPage = () => {
  return (
    <>
      <Head>
        <title>Haru - Berly Dai</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main>
        <LogoHeader name="haru"></LogoHeader>
        <FullScreenImage
          image="/haru/main_full"
          alt="Haru photo"
          height={Height.Free}
          width={Width.Full}
          layoutId="haru-image"
          imageHeight={1656}
          imageWidth={2560}
        ></FullScreenImage>
      </main>
    </>
  );
};

export default Haru;
