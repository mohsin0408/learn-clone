import React from "react";
import { FaYoutube } from "react-icons/fa6";
import Button from "./Button";
import { courseData } from "../Data/Data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Curriculum = () => {
  const params = useParams();

  const courseObj = courseData?.data?.filter(
    (course) => course.slug === params.slug
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 px-2 ">
        <h2 className="mt-5 text-3xl ">Course Curriculum</h2>
        <div className="">
          {courseObj?.map((obj) => (
            <>
              <p className="px-4 py-3 bg-[#e8e8e8] text-lg font-semibold ">
                {obj?.firstHead}
              </p>
              <p>
                {obj?.firstContent?.map((item) => {
                  return (
                    <div className="w-full text-base">
                      <Link to={`/course/${obj.slug}/Dashboard`}>
                        <div className="flex items-center cursor-pointer w-full justify-between py-3 px-4 bg-[#f0f0f0] border-b-2 border-b-white gap-2 md:gap-20 hover:text-[#430094] hover:bg-[#e0d2f0] ">
                          <span className="flex items-center gap-3 line-clamp-2 ">
                            <div>
                              <FaYoutube className="text-2xl" />
                            </div>
                            {item}
                          </span>
                          <Button
                            text="Preview"
                            rounded="md"
                            px="12px"
                            py="3px"
                          />
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </p>
            </>
          ))}
        </div>
        <div className="">
          {courseObj?.map((obj) => (
            <>
              <p className="px-4 py-3 bg-[#e8e8e8] text-lg font-semibold ">
                {obj?.secondHead}
              </p>
              <p>
                {obj?.secondContent?.map((item, i) => {
                  return (
                    <div className="w-full text-base">
                      <div className="flex items-center cursor-pointer w-full justify-between py-3 px-4 bg-[#f0f0f0] border-b-2 border-b-white gap-2 md:gap-20 hover:text-[#430094] hover:bg-[#e0d2f0] ">
                        <span className="flex items-center gap-3 line-clamp-2 ">
                          <div>
                            <FaYoutube className="text-2xl" />
                          </div>
                          {item}
                        </span>
                        <Button
                          text="Preview"
                          rounded="md"
                          px="12px"
                          py="3px"
                        />
                      </div>
                    </div>
                  );
                })}
              </p>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
