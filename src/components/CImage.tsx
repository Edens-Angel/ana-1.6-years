import React, { FC } from "react";

interface ImageProps {
  imageUrl: string;
}

const CImage: FC<ImageProps> = ({ imageUrl }) => {
  const isMobile = true;
  const height = isMobile ? "70px" : "550px";

  return (
    <div
      className="border border-1 w-100"
      style={{ width: "80px", height: height }}
    >
      <div
        style={{ background: `url(${imageUrl})` }}
        className="image-class w-100 h-100"
      ></div>
    </div>
  );
};

export default CImage;
