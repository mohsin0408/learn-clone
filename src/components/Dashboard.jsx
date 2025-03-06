import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { courseData } from "../Data/Data";
import { useParams } from "react-router-dom";
import { LuTvMinimalPlay } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";

const Dashboard = ({ handlePathname }) => {
  const params = useParams();
  const courseObj = courseData?.data?.filter(
    (course) => course.slug === params.slug
  );
  const [videoSrcs, setVideoSrcs] = useState();
  console.log(videoSrcs, "videoSrcs");
  const location = useLocation();
  const pathname = location.pathname;

  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  useEffect(() => {
    handlePathname(lastPart);
  }, [lastPart, handlePathname]);
  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-between h-16 p-3 text-2xl text-white bg-black border-r border-white w-[405px] ">
          <SlHome />
          <IoSettingsOutline />
        </div>
        <div className="w-4/5 h-16 p-3 text-2xl text-white bg-black ">
          plmkinjuhbvgy
        </div>
      </div>
      <div className="flex">
        <div className=" w-[380px] h-[550px] ">
          {courseObj?.map((obj) => (
            <div className="overflow-y-scroll h-[32rem] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              <p className="px-4 py-3 text-lg font-semibold ">
                {obj?.firstHead}
              </p>
              <div>
                {obj?.firstContent.map((item) => (
                  <div
                    className=" hover:bg-[#c494ff] p-3 flex items-center gap-2 border-y "
                    onClick={() => setVideoSrcs(item?.vidSrc)}>
                    <span className="px-2 text-2xl border-r ">
                      <FaRegCircle />
                    </span>
                    <span className="flex items-center justify-center gap-1 text-2xl ">
                      <span>
                        <LuTvMinimalPlay />
                      </span>
                      <p className="text-base">{item.name}</p>
                    </span>
                  </div>
                ))}
              </div>
              <p className="px-4 py-3 text-lg font-semibold ">
                {obj?.secondHead}
              </p>
              <p>
                {obj?.secondContent.map((item) => (
                  <div className="flex items-center gap-4 p-3 hover:bg-[#e0d2f0] border-y ">
                    <span className="text-2xl">
                      <FaRegCircle />
                    </span>
                    <span className="flex items-center justify-center gap-1 text-2xl ">
                      <span>
                        <LuTvMinimalPlay />
                      </span>
                      <p className="text-base">{item}</p>
                    </span>
                  </div>
                ))}
              </p>
            </div>
          ))}
        </div>
        <div>
          {videoSrcs ? (
            <video width="600" controls>
              <source src={videoSrcs} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <p>Select a video to watch</p>
          )}
          {/* <video width="600" controls>
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

{
  /* <iframe
src={videoSrcs}
width="100%"
height="300"
title="Course Video">
jfefhvfe
</iframe> */
}
