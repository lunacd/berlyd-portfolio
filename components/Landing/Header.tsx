/**
 * Made by Haowen Liu in 2021
 * Component of the header of page.
 */

import Link from "next/link";
import { Fragment } from "react";

interface HeaderProps {
  color: "black" | "green" | "white" | "blue" | "pink";
}

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <header className="absolute z-40 mt-4 flex h-36 w-full items-center">
      <div className="ml-8 w-24 xl:ml-14">
        <Link href={`/#landing`} passHref>
          <img
            src={`/logo_${props.color}.png`}
            alt="Logo"
            height={128}
            width={128}
            className="cursor-pointer"
          ></img>
        </Link>
      </div>
      <div className={`ml-auto mr-10 text-${props.color} xl:mr-16`}>
        <Fragment>
          <span className={`mr-2`}>
            <Link href="/about">About</Link>
          </span>
          <span className={`m-2`}>
            <Link href="/resume">Resume</Link>
          </span>
          <span className={`m-2`}>
            <Link href="/book">Book</Link>
          </span>
        </Fragment>
      </div>
    </header>
  );
};

export default Header;
