import React from "react";
import { InstructorData } from "../Data/Data";

const Instructor = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className=" flex flex-col gap-4 w-[53%] p-6 ">
        <h2>{InstructorData?.heading}</h2>
        <div className="flex gap-2 ">
          <div>
            <img
              className=" rounded-[50%] w-[170px]  "
              src={InstructorData?.singleImg}
            />
            <h2>{InstructorData?.title}</h2>
          </div>
          <div>
            {InstructorData?.para?.map((item, index) => (
              <div key={index}>
                <p className="text-lg font-extralight ">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instructor;
