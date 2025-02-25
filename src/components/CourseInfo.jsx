import React from "react";
import { CourseInfoData } from "../Data/Data";

const CourseInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className=" flex flex-col gap-4 w-[50%] ">
        <h2>{CourseInfoData?.heading}</h2>
        {CourseInfoData?.para?.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
    </div>
  );
};

export default CourseInfo;
