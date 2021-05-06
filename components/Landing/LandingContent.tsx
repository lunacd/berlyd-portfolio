/**
 * Made by Haowen Liu in 2021
 * Component for displaying a single project on landing page.
 */

import CustomButton from "../CustomButton";
import Image from "../Image";
import Link from "next/link";
import { motion } from "framer-motion";

class LandingContentProps {
  name: string = "";
  title: string = "";
  tagline: string = "";
  desc: string = "";
  image: string = "";
  titleLong: boolean = false;
  bgColor: string = "";
  textColor: string = "";
}

export default function LandingContent(props: LandingContentProps) {
  let textSize = "";
  if (props.titleLong) {
    textSize =
      "whitespace-normal text-20 md:whitespace-nowrap md:text-24 lg:text-24 xl:text-28 2xl:text-32";
  } else {
    textSize = "text-28 lg:text-32 xl:text-36 2xl:text-40 whitespace-nowrap";
  }
  return (
    <div className={`bg-${props.bgColor} h-screen relative flex items-center`}>
      <div className="flex w-full">
        <div className="flex flex-col items-center pl-10 md:w-7/20 lg:pl-40 xl:pl-48 2xl:pl-52">
          <div className="flex flex-col h-full">
            <div
              className={
                `text-${props.textColor} font-calson z-50 relative w-0 leading-tight md:leading-none transform translate-x-16 md:transform-none ` +
                textSize
              }
            >
              {props.title}
            </div>
            <div className="flex-col justify-center flex-grow hidden md:flex">
              <div
                className={`text-${props.textColor} text-3xl xl:text-4xl 2xl:text-5xl mb-2`}
              >
                {props.tagline}
              </div>
              <div
                className={`text-${props.textColor} text-base 2xl:text-lg my-2 w-60 xl:w-64 2xl:w-80`}
              >
                {props.desc}
              </div>
              <div>
                <CustomButton
                  href={props.name}
                  text="View Project"
                  color={`${props.textColor}`}
                />
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="relative flex-grow mx-10 xl:mx-16 h-65vh mt-8vh md:ml-0"
          layoutId={`${props.name}-image`}
        >
          <Link href={props.name}>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <Image
                src={props.image}
                alt={props.title}
                className="cursor-pointer"
                layout="fill"
              ></Image>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
