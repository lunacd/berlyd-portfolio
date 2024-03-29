/**
 * Made by Haowen Liu in 2021
 * Component for the main landing page.
 *
 * NO SSR: this requires window.location.hash on init.
 */

import React, { Fragment, useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import PageSelector from "./PageSelector";
import { useSwipeable } from "react-swipeable";
import { useRouter } from "next/dist/client/router";
import Header from "./Header";
import ScrollIndicator from "./ScrollIndicator";
import LandingContent from "./LandingContent";
import Image from "../Image";
import LandingContentTemp from "./LandingContentTemp";
import Play from "./play";

const nameMap = new Map([
  ["#landing", 0],
  ["#mojo", 1],
  ["#hidden_season", 2],
  ["#chocolit", 3],
  ["#peloton_gaming", 4],
  ["#multicolor_pen", 5],
  ["#haru", 6],
]);

const names = [
  "landing",
  "mojo",
  "hidden_season",
  "chocolit",
  "peloton_gaming",
  "multicolor_pen",
  "haru",
];

const THRESHOLD = 30;
const NUM_PAGES = 6;

function getScrollLineHeight() {
  const el = document.createElement("div");
  el.style.fontSize = "initial";
  el.style.display = "none";
  document.body.appendChild(el);
  const fontSize = window.getComputedStyle(el).fontSize;
  document.body.removeChild(el);
  return fontSize ? window.parseInt(fontSize) : undefined;
}

const LandingMain: React.FC = () => {
  const [delta, setDelta] = useState(0);
  const [lineHeight, setLineHeight] = useState<number | undefined>(undefined);
  const [transitioning, setTransitioning] = useState(false);

  const [section, setSection] = useState(
    nameMap.get(window.location.hash) ?? 0
  );

  const { push } = useRouter();

  useEffect(() => {
    push({ pathname: "/", hash: names[section ?? 0] });
    // This effect modifies route. Router should not circularly trigger this effect.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [section]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (transitioning) return;
      let newDelta = 0;
      switch (e.deltaMode) {
        case 0: {
          newDelta = delta + e.deltaY;
          break;
        }
        case 1: {
          if (lineHeight === undefined) {
            const height = getScrollLineHeight();
            setLineHeight(height);
            if (height) {
              newDelta = delta + height * e.deltaY;
            }
          } else {
            newDelta = delta + lineHeight * e.deltaY;
          }
          break;
        }
        case 2: {
          if (e.deltaY < 0) {
            newDelta = delta - 2 * THRESHOLD;
          } else if (e.deltaY > 0) {
            newDelta = delta + 2 * THRESHOLD;
          }
          break;
        }
      }

      if (newDelta > THRESHOLD) {
        setSection((orig) => {
          if (orig === undefined) {
            return 0;
          }
          if (orig !== NUM_PAGES) {
            return orig + 1;
          } else {
            return NUM_PAGES;
          }
        });
        newDelta = 0;
        setTransitioning(true);
        setTimeout(() => {
          setTransitioning(false);
        }, 300);
      } else if (newDelta < -THRESHOLD) {
        setSection((orig) => {
          if (orig === undefined) {
            return 0;
          }
          if (orig !== 0) {
            return orig - 1;
          } else {
            return 0;
          }
        });
        newDelta = 0;
        setTransitioning(true);
        setTimeout(() => {
          setTransitioning(false);
        }, 300);
      }

      setDelta(newDelta);
    },
    [delta, lineHeight, transitioning]
  );

  const swipeHandlers = useSwipeable({
    onSwipedUp: () => {
      setSection((orig) => {
        if (orig !== NUM_PAGES) {
          if (orig === undefined) {
            return 0;
          }
          return orig + 1;
        } else {
          return NUM_PAGES;
        }
      });
    },
    onSwipedDown: () => {
      setSection((orig) => {
        if (orig === undefined) {
          return 0;
        }
        if (orig !== 0) {
          return orig - 1;
        } else {
          return 0;
        }
      });
    },
  });

  return (
    <Fragment>
      <PageSelector page={section} setSection={setSection}></PageSelector>

      <div
        className="relative h-screen w-screen overflow-hidden"
        onWheel={handleWheel}
        {...swipeHandlers}
      >
        <motion.div
          className="absolute w-full"
          initial={false}
          animate={{ top: `${-section}00vh` }}
          transition={{
            type: "spring",
            damping: 10,
            mass: 0.5,
            stiffness: 100,
            velocity: 100,
          }}
        >
          <Header color="black" />
          {/* Intro page */}
          <div className="relative flex h-screen items-center bg-pink">
            <div className="absolute left-0 top-0 h-full w-full">
              <Play />
            </div>
            <div
              className="hidden overflow-visible md:mx-auto md:inline-block lg:ml-60 lg:mr-0 xl:relative xl:left-1/5 xl:mx-0"
              style={{ pointerEvents: "none" }}
            >
              <div className="h-24 w-3/4 lg:h-32 xl:h-36">
                <Image
                  src="/berlyd_full"
                  alt="Berly Dai"
                  layout="responsive"
                  height={540}
                  width={2004}
                />
              </div>
              <div className="text-2xl text-black lg:text-3xl xl:text-4xl">
                I&apos;m a creator, designer, and a life lover.
              </div>
            </div>
            <div className="mx-auto block md:hidden">
              <div className="h-32 w-full lg:h-36">
                <Image
                  src="/berlyd_half"
                  alt="Berly Dai"
                  layout="responsive"
                  height={540}
                  width={1099}
                />
              </div>
              <div className="text-center text-lg text-black">
                designer &#183; creator &#183; life lover
              </div>
            </div>
            <ScrollIndicator />
          </div>

          <LandingContent
            name="mojo"
            title="Mojo"
            tagline="Mojito"
            desc="a delightful taste from Havana"
            image="/mojo/main_full"
            titleLong={false}
            textColor="green"
            bgColor="white"
          />

          <LandingContent
            name="hidden_season"
            title="Hidden Season"
            tagline="Makeup Set"
            desc="a memorable gift from The Palace Museum"
            image="/hidden_season/main_full"
            titleLong={true}
            textColor="white"
            bgColor="green"
          />

          <LandingContentTemp
            name="chocolit"
            title="Chocolit"
            tagline="Toy &amp; Treat"
            desc="a playful and tasty kit for adult"
            image="/chocolit/main_full"
            titleLong={true}
            bgColor="pink"
            textColor="black"
            tempLink="https://www.berlyd.com/chocolit"
          />

          <LandingContentTemp
            name="peloton_gaming"
            title="Peloton Gaming"
            tagline="VR Headset"
            desc="a gaming platform aimed at blending gaming with physical activity"
            image="/peloton_gaming/main_full"
            titleLong={true}
            textColor="white"
            bgColor="blue"
            tempLink="https://www.berlyd.com/projects/pelotongaming"
          />

          <LandingContentTemp
            name="multicolor_pen"
            title="Multicolor Pen"
            tagline="Adaptive Pen"
            desc="a tool to help artists with cerebral palsy to draw independently"
            image="/multicolor_pen/main_full"
            titleLong={true}
            bgColor="black"
            textColor="pink"
            tempLink="https://www.berlyd.com/projects/multicolorpen"
          />

          <LandingContentTemp
            name="haru"
            title="Haru"
            tagline="Speaker"
            desc="a seasonal limited high-end speaker for Francfranc"
            image="/haru/main_full"
            titleLong={false}
            textColor="blue"
            bgColor="white"
            tempLink="https://www.berlyd.com/projects/haru"
          />
        </motion.div>
      </div>
    </Fragment>
  );
};

export default LandingMain;
