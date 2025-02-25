import React from "react";
import { CourseInfoData } from "../Data/Data";

const CourseInfo = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <div className="flex items-center justify-center ">
        <iframe
          height="500"
          width="1000"
          src={CourseInfoData?.videoUrl}
          className="py-2"></iframe>
      </div>
      <div className=" flex flex-col gap-4 w-[50%] ">
        <h2>{CourseInfoData?.heading}</h2>
        {CourseInfoData?.para?.map((item) => {
          return <p>{item}</p>;
        })}
      </div>
      <div className=" flex flex-col gap-4 w-[50%] ">
        <h2>{CourseInfoData?.heading}</h2>
        <ul className="flex flex-col gap-4">
          {CourseInfoData?.about?.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseInfo;
