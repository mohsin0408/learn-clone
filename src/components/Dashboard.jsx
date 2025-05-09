import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTvMinimalPlay } from "react-icons/lu";
import { FaRegCircle } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSrcs, setName } from "./Store/Action";
import Curriculum from "./Curriculum";

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

  const handleVideoSrcs = (videoSrc, title, id) => {
    dispatch(setVideoSrcs(videoSrc));
    dispatch(setName(title));
    navigate(`/lectures/${params.slug}/Lectures/${id}`);
  };

  if (loading) return <div className="mt-20 text-center">Loading...</div>;
  if (!lectures)
    return <div className="mt-20 text-center">Lectures not found</div>;

  return (
    <div>
      <div className="flex">
        <div className="flex items-center justify-between h-16 p-3 text-2xl text-white bg-black border-r border-white w-[405px]">
          <SlHome
            className="cursor-pointer"
            onClick={() => navigate(`/course/${params.slug}`)}
          />
          <IoSettingsOutline />
        </div>
      </div>

      <div className="flex">
        <div className="w-[380px] h-[550px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-200">
          <Curriculum dashboard lectures={lectures} />
        </div>

        {/* <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-2 text-xl font-medium">
            <LuTvMinimalPlay />
            <p>{name}</p>
          </div>
          <video
            src={videoSrcs}
            width="600"
            height="400"
            autoPlay
            muted
            playsInline
            controls>
            Your browser does not support the video tag.
          </video>
        </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
