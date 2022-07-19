/**
 * Made by Haowen Liu in 2021
 * Component for creating a collapsable section.
 */

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState, useRef, PropsWithChildren } from "react";

interface CollapseProps {
  title: string;
  color: string;
}

const hoverVariants = {
  default: { scaleX: 0 },
  hovered: { scaleX: 1 },
}

const Collapse: React.FC<PropsWithChildren<CollapseProps>> = (props) => {
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  const titleElement = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      initial={{ height: "8rem" }}
      animate={{ height: show ? "auto" : "8rem" }}
      transition={{ type: "spring", duration: 1, bounce: 0.15 }}
      className={`${show ? "" : "overflow-hidden"} relative`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <motion.div
        animate={hover ? "hover" : "default"}
        variants={hoverVariants}
        className={`absolute top-0 left-0 w-full h-full border-${props.color} border-t-2 border-b-2`}>
      </motion.div>
      <motion.div
        className={`sticky origin-center self-center inline-block ml-10 h-7.5 w-7.5 md:w-9 md:h-9 top-12 xl:ml-16 cursor-pointer ${show ? "mt-12" : ""
          }`}
        initial={{ transform: "rotate(0deg)" }}
        animate={{
          transform: show ? "rotate(45deg)" : "rotate(0deg)",
        }}
        transition={{ type: "spring", duration: 1, bounce: 0.5 }}
        onClick={() => {
          setShow((origShow) => {
            if (titleElement.current) {
              if (titleElement.current.getBoundingClientRect().top < 0) {
                titleElement.current.scrollIntoView({
                  behavior: "smooth",
                });
              }
            }
            return !origShow;
          });
        }}
      >
        <FontAwesomeIcon
          icon={faPlus}
          className={`h-7.5 md:h-9 text-${props.color} align-top`}
        ></FontAwesomeIcon>
      </motion.div>
      <div
        className={`align-top inline-block relative top-12 pl-6 font-bold self-center text-${props.color} cursor-pointer leading-none md:leading-none m_font`}
        onClick={() => {
          setShow((origShow) => !origShow);
        }}
        ref={titleElement}
      >
        {props.title}
      </div>
      <div
        className={`mx-20 overflow-auto xl:mx-28 ${show ? "mt-12" : "mt-24"}`}
      >
        {props.children}
      </div>
    </motion.div>
  );
};

export default Collapse;
