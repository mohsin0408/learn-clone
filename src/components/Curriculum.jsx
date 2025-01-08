import React from "react";
import { FaYoutube } from "react-icons/fa6";
import Button from "./Button";

const Curriculum = () => {
  const CurriculumData = {
    heading: "Getting Started",
    data: [
      "Welcome To The Course! (2:09)",
      "Course Overview: What You'll Learn &amp; Achieve  (1:56)",
      "Course Focus: AI Programming Tools & Beyond  (1:47)",
      "Understanding AI: Limitations, Costs &amp; Unpredictability  (2:19) ",
    ],
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Course Curriculum</h2>
      <div>
        <div className="px-4 py-3 bg-[#e8e8e8] ">{CurriculumData?.heading}</div>
        <div className="w-full text-base">
          {CurriculumData?.data?.map((item, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer w-full justify-between py-3 px-4 bg-[#f0f0f0] border-b-2 border-b-white gap-20 hover:text-[#430094] hover:bg-[#e0d2f0] ">
              <span className="flex items-center gap-2 ">
                <FaYoutube className="text-lg " />
                {item}
              </span>
              <Button text="Preview" rounded="2xl" px="12px" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
