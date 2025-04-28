import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { courseData } from "../Data/Data";
import { useParams } from "react-router-dom";
import { LuTvMinimalPlay } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSrcs, setName } from "./Store/Action";

const Dashboard = ({ handlePathname }) => {
  const params = useParams();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videoSrcs = useSelector((state) => state.videoSrcs);
  const name = useSelector((state) => state.name);

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

  const handleVideoSrcs = (videoSrc, name, id) => {
    dispatch(setVideoSrcs(videoSrc));
    dispatch(setName(name));
    navigate(`/course/${params.slug}/Lectures/${id}`);
  };

  useEffect(() => {
    const currentCourse = courseObj[0].firstContent.filter(
      (item) => item.id === params.id
    );

    dispatch(setName(currentCourse[0].name));
    dispatch(setVideoSrcs(currentCourse[0].vidSrc));
    handlePathname(params.id);
  }, []);

  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-between h-16 p-3 text-2xl text-white bg-black border-r border-white w-[405px] ">
          <SlHome onClick={() => navigate(`/course/${params.slug}`)} />
          <IoSettingsOutline />
        </div>
        <div className="w-4/5 h-16 p-3 text-2xl text-white bg-black ">
          plmkinjuhbvgy
        </div>
      </div>
      <div className="flex">
        <div className=" w-[380px] h-[550px] ">
          {courseObj?.map((obj, index) => (
            <div
              key={index}
              className="overflow-y-scroll w-[390px] h-[32rem] scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
              <p className="px-4 py-3 text-lg font-semibold ">
                {obj?.firstHead}
              </p>
              <div>
                {obj?.firstContent?.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className=" hover:bg-[#c494ff] p-3  flex items-center gap-2 border-y "
                      onClick={() =>
                        handleVideoSrcs(item?.vidSrc, item?.name, item?.id)
                      }>
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
                  );
                })}
              </div>
              <p className="px-4 py-3 text-lg font-semibold ">
                {obj?.secondHead}
              </p>
              <div>
                {obj?.secondContent.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-3 hover:bg-[#e0d2f0] border-y ">
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
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center">
          <div>
            <span className="flex items-center justify-center gap-1 text-2xl ">
              <span>
                <LuTvMinimalPlay />
              </span>
              <p className="text-base">{name}</p>
            </span>
          </div>
          <video
            src={videoSrcs}
            width="50%"
            height="50%"
            autoPlay
            muted
            playsInline
            controls>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
