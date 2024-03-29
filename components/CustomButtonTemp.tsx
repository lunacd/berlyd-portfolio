/**
 * Made by Haowen Liu in 2021
 * Component of a custom styled button.
 */
import React from "react";

interface ButtonTempProps {
  text: string;
  href: string;
  color: string;
  secondaryColor: string;
}

const CustomButton: React.FC<ButtonTempProps> = (props) => {
  return (
    <a href={props.href} target="_blank" rel="noreferrer noopener">
      <div
        className={`border-${props.color} text-${props.color} hover:bg-${props.color} hover:text-${props.secondaryColor} my-2 inline-block cursor-pointer border-2 transition-colors`}
      >
        <div className="m-2 font-bold">{props.text}</div>
      </div>
    </a>
  );
};

export default CustomButton;
