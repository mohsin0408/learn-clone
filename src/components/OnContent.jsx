import React from "react";
import { LuTvMinimalPlay } from "react-icons/lu";

const OnContent = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <span className="flex items-center justify-center gap-1 text-2xl ">
          <span>
            <LuTvMinimalPlay />
          </span>
          <p className="text-base">hvhdsavf</p>
        </span>
      </div>
      {/* <video
        src={videoSrcs}
        width="50%"
        height="50%"
        autoPlay
        muted
        playsInline
        controls>
        Your browser does not support the video tag.
      </video> */}
    </div>
  );
};

export default OnContent;
