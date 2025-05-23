import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { SlHome } from "react-icons/sl";
import { IoSettingsOutline } from "react-icons/io5";
import { LuTvMinimalPlay } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setVideoSrcs, setName } from "./Store/Action";
import Curriculum from "./Curriculum";
import { RxHamburgerMenu } from "react-icons/rx";
import Button from "./Button";
import { setCompletedLectures } from "./Store/Action";

const Dashboard = ({ handlePathname }) => {
  const [show, setShow] = useState(false);
  const [lectures, setLectures] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const videoSrcs = useSelector((state) => state.videoSrcs);
  const name = useSelector((state) => state.name);
  const completedLectures = useSelector((state) => state.completedLectures);

  const location = useLocation();
  const pathname = location.pathname;
  const pathParts = pathname.split("/");
  const lastPart = pathParts[pathParts.length - 1];

  const totalChapters = lectures
    ? lectures.flatMap((s) => s.chapters).length
    : 0;
  const completedCount = completedLectures.length;
  const progressPercent =
    totalChapters > 0 ? Math.round((completedCount / totalChapters) * 100) : 0;

  useEffect(() => {
    handlePathname(lastPart);
  }, [lastPart, handlePathname]);

  useEffect(() => {
    const saved = localStorage.getItem("completedLectures");
    if (saved) {
      dispatch(setCompletedLectures(JSON.parse(saved)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "completedLectures",
      JSON.stringify(completedLectures)
    );
  }, [completedLectures]);

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
    <div className="bg-[#f9f9fb] min-h-screen">
      {/* Top Navigation */}
      <div className="fixed top-0 z-50 flex w-full shadow-sm ">
        <div className="h-[70px] flex items-center justify-between px-5 md:border-r border-gray-300 bg-black text-white max-w-[320px] w-[50%] md:w-[100%]">
          <SlHome
            className="cursor-pointer text-[26px]"
            onClick={() => navigate(`/course/${params.slug}`)}
          />
          <IoSettingsOutline className="text-[26px]" />
        </div>
        <div className="h-[70px] flex items-center justify-between px-5 w-[50%] md:w-[100%] bg-black text-white">
          <RxHamburgerMenu
            className="text-[26px] visible md:invisible cursor-pointer"
            onClick={() => setShow(!show)}
          />
          <div className="w-[60%] md:w-[30%] mt-4">
            <div className="mb-1 text-sm font-medium text-white">
              Progress: {progressPercent}%
            </div>
            <div className="w-full bg-white rounded-full h-2.5">
              <div
                className="bg-[#5A00C7] h-2.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-[80px] md:pt-[70px] flex">
        {/* Left Curriculum */}
        <div className="hidden md:block w-[320px] h-[calc(100vh-70px)] overflow-y-auto border-r bg-white scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
          <Curriculum dashboard lectures={lectures} />
        </div>

        {/* Video Section */}
        <div className="flex flex-col items-center flex-1 gap-6 p-10 px-5">
          <div className="w-full ">
            <div className="flex items-center gap-4 text-xl font-semibold mb-4 text-[#333]">
              <LuTvMinimalPlay className="text-[28px]" />
              <p className="text-lg md:text-xl">{name}</p>
            </div>
            <video
              src={videoSrcs}
              className=" w-[100%] shadow-lg rounded-xl"
              autoPlay
              muted
              playsInline
              controls>
              Your browser does not support the video tag.
            </video>
            <div className="mt-5 text-center">
              <Button
                text="Completed"
                px="30px"
                py="12px"
                obj={Number(params.id)} // lecture ID pass karo
                clickHandler={(id) => {
                  if (!completedLectures.includes(id)) {
                    dispatch(setCompletedLectures([...completedLectures, id]));
                  }

                  // ✅ Find all chapter IDs
                  const allChapters = lectures.flatMap(
                    (section) => section.chapters
                  );
                  const currentIndex = allChapters.findIndex(
                    (chapter) => chapter.id === id
                  );

                  // ✅ Navigate to next lecture if exists
                  if (
                    currentIndex !== -1 &&
                    currentIndex < allChapters.length - 1
                  ) {
                    const nextLectureId = allChapters[currentIndex + 1].id;

                    // 👇 Use your actual route format here
                    navigate(
                      `/course/${params.slug}/lectures/${nextLectureId}`
                    );
                  } else {
                    // ✅ Optional: Last lecture alert
                    alert("Congratulations! You've completed the course 🎉");
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Curriculum Drawer */}
      {show && (
        <div
          className="fixed  top-[70px] left-0 z-40 w-full h-[calc(100vh-70px)] overflow-y-auto bg-white md:hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
          onClick={() => setShow(false)}>
          <Curriculum dashboard lectures={lectures} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
