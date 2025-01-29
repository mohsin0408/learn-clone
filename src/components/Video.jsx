import React from "react";

const Video = () => {
  const videoData = {
    heading: "LEARN TO CODE & BOOST YOUR CAREER",
    desc: "Master coding from fundamentals to advanced topics in real-world projects! Earn certificates to showcase your progress and achievements!",
    videoUrl: "https://player.hotmart.com/embed/OLD8mzG1Lx",
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center p-10 ">
        <h2 className="mt-5 mb-2 text-2xl font-semibold text-center lg:text-3xl ">
          {videoData.heading}
        </h2>
        <p className="mb-5 text-lg text-center font-extralight ">
          {videoData.desc}
        </p>
        <iframe width="560" height="315" src={videoData.videoUrl}></iframe>
      </div>
    </div>
  );
};

export default Video;
