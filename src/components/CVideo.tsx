import React, { FC } from "react";

const CVideo: FC = () => {
  const videoPath = "vid.mov";
  return (
    <div className="flex-center">
      <div
        style={{ height: "9rem", width: "70%" }}
        className="bg-secondary mt-4"
      >
        <div className="video-wrapper">
          <video
            style={{ objectFit: "cover" }}
            autoPlay
            loop
            muted
            id="headervideo"
          >
            <source src={videoPath} />
          </video>
        </div>
      </div>
    </div>
  );
};

export default CVideo;
