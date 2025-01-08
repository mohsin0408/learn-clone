import React from "react";
import { FaYoutube } from "react-icons/fa6";
import Button from "./Button";

const Curriculum = () => {
  const CurriculumData = {
    heading: "Getting Started",
    data: [
      "Welcome To The Course!(2:09)",
      "Course Overview: What You'll Learn &amp; Achieve(1:56)",
      "Course Focus: AI Programming Tools & Beyond(1:47)",
      "Understanding AI: Limitations, Costs &amp; Unpredictability(2:19) ",
    ],
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Course Curriculum</h2>
      <div>
        <span className="px-4 py-3">{CurriculumData?.heading}</span>
        <div className="w-[100%]">
          {CurriculumData?.data?.map((item, index) => (
            <div
              key={index}
              className="flex items-center w-[100%] justify-between py-3 px-4 ">
              <span className="flex items-center gap-2 ">
                <FaYoutube />
                {item}
              </span>
              <span>
                <Button text="Preview" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
