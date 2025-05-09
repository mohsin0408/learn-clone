import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTvMinimalPlay } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSrcs, setName } from "./Store/Action";
import Curriculum from "./Curriculum";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";

const Dashboard = ({ handlePathname }) => {
  const [lectures, setLectures] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videoSrcs = useSelector((state) => state.videoSrcs);
  const name = useSelector((state) => state.name);

  const location = useLocation();
  const pathname = location.pathname;
  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  useEffect(() => {
    handlePathname(lastPart);
  }, [lastPart, handlePathname]);

  const fetchLectures = async () => {
    try {
      const res = await fetch(
        `https://optimist-dev-backend.onrender.com/api/course-lectures/${params.slug}`
      );
      const data = await res.json();

      const curriculum = data?.lectures?.courseCurriculumData;
      setLectures(curriculum);

      const currentLecture = curriculum
        ?.flatMap((section) => section.chapters)
        .find((chapter) => chapter.id === Number(params.id));

      if (currentLecture) {
        dispatch(setVideoSrcs(currentLecture.chapter_src));
        dispatch(setName(currentLecture.title));
      }
    } catch (error) {
      console.error("Error fetching lectures:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLectures();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params.slug, params.id]);

  if (loading) return <div className="mt-20 text-center">Loading...</div>;
  if (!lectures)
    return <div className="mt-20 text-center">Lectures not found</div>;

  return (
    <div className="">
      <div className="fixed top-0 flex items-center w-full ">
        <div className="h-[70px] border-r-white border-r text-white min-w-[380px] flex max-sm:px-10 px-5 items-center justify-between bg-black max-md:w-full">
          <SlHome
            className="cursor-pointer"
            onClick={() => navigate(`/course/${params.slug}`)}
          />
          <IoSettingsOutline />
        </div>
        <div className="h-[70px] pr-10 bg-black w-full text-white flex items-center justify-end max-md:hidden">
          <RxHamburgerMenu />
          <Button text="complete the course" px="30px" py="12px" />
        </div>
      </div>

      <div className="w-full h-[calc(100vh_+_200px)] flex pt-[70px] ">
        <div className=" w-[380px] h-full overflow-y-auto max-md:hidden scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <Curriculum dashboard lectures={lectures} />
        </div>
        <div className="flex-1 py-10 md:pt-[70px] pt-[30px] flex flex-col items-center gap-4">
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2 text-xl font-medium">
              <LuTvMinimalPlay />
              <p>{name}</p>
            </div>
            <video
              src={videoSrcs}
              className="w-[100%]  rounded-lg"
              autoPlay
              muted
              playsInline
              controls>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
