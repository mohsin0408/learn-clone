import React from "react";
import { goalsData } from "../Data/Data";

const Goals = () => {
  return (
    <div>
      <div className="bg-[#3c374b] py-12 ">
        <h2 className="text-3xl font-semibold text-center lg:text-4xl text-[#FFC675] ">
          {goalsData.heading}
        </h2>
        <p className="text-lg text-center font-extralight text-[#FFE7A3] ">
          {goalsData.desc}
        </p>
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-3">
          {goalsData.goalImg.map((img, index) => (
            <span
              key={index}
              className="flex flex-col items-center justify-center gap-5">
              <img src={img.img} alt="goal" className="w-20 h-20" />
              <p className="text-[#FFE7A3]">{img.info}</p>
            </span>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Goals;
