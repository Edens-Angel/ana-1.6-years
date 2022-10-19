import React, { FC } from "react";

const CFooter: FC = () => {
  const style = { width: "50px", height: "40px" };
  return (
    <div className="mt-3 bg-secondary">
      <div className="flex-center align-items-center">
        <strong className="text-white">Press me --{">"}</strong>
        <a
          className="mx-4"
          target="_blank"
          href="https://calendar.google.com/calendar/u/1?cid=cGF1bGFsZGFiYWdod29ya0BnbWFpbC5jb20"
        >
          <img style={style} src="img/calendar.png" />
        </a>

        <strong className="text-white">{"<"}-- Press me</strong>
      </div>
    </div>
  );
};

export default CFooter;
