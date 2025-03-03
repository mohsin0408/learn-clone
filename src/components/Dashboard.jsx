import React, { useEffect } from "react";
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

  const location = useLocation();
  const pathname = location.pathname;

  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  useEffect(() => {
    handlePathname(lastPart);
  }, [lastPart, handlePathname]);
  return (
    <div className="flex items-center justify-center w-full ">
      <div className="w-[380px] ">
        <div className="flex items-center justify-between h-16 p-3 text-2xl text-white bg-black border-r border-white ">
          <SlHome />
          <IoSettingsOutline />
        </div>
        <div className="overflow-y-scroll ">
          {courseObj?.map((obj) => (
            <>
              <p className="px-4 py-3 text-lg font-semibold ">
                {obj?.firstHead}
              </p>
              <div>
                {obj?.firstContent.map((item) => (
                  <div className="flex hover:bg-[#e0d2f0] p-3 ">
                    <FaRegCircle className="text-3xl" />
                    <LuTvMinimalPlay className="text-3xl" />
                    <p className="text-sm">{item}</p>
                  </div>
                ))}
              </div>
              <p className="px-4 py-3 text-lg font-semibold ">
                {obj?.secondHead}
              </p>
              <p>
                {obj?.secondContent.map((item) => (
                  <div className="flex items-center gap-4 p-2">
                    <LuTvMinimalPlay />
                    {item}
                  </div>
                ))}
              </p>
            </>
          ))}
        </div>
      </div>
      <div className="w-4/5 bg-red-300 ">plmnbc</div>
    </div>
  );
};

export default Dashboard;
