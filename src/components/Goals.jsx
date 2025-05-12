import React from "react";
import { goalsData } from "../Data/Data";

const Goals = () => {
  return (
    <div>
      <div className="bg-[#f1f0f0] py-12 ">
        <h2 className="text-3xl font-semibold text-center lg:text-4xl text-[#676262] ">
          {goalsData.heading}
        </h2>
        <p className="text-lg text-center font-extralight text-[#676262] ">
          {goalsData.desc}
        </p>
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-3">
          {goalsData.goalImg.map((img, index) => (
            <span
              key={index}
              className="flex flex-col items-center justify-center gap-5">
              <img src={img.img} alt="goal" className="w-20 h-20" />
              <p className="text-[#676262]">{img.info}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
