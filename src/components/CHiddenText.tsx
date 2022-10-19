import React, { FC } from "react";

interface HiddenText {
  text: string;
  show: boolean;
  fontSize: number;
}

const CHiddenText: FC<HiddenText> = ({ text, show, fontSize }) => {
  return (
    <span
      style={{ fontSize: `${fontSize}px` }}
      className={`${show ? "d-block" : "d-none"}`}
    >
      {text}
    </span>
  );
};

export default CHiddenText;
