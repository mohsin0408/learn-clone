import React from "react";
import { useSelector } from "react-redux";
import { goalsData } from "../Data/Data";

const Goals = () => {
  const theme = useSelector((state) => state.theme);

  const bgColor = theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#f1f0f0]";
  const textColor = theme === "dark" ? "text-gray-200" : "text-[#676262]";
  const headingColor = theme === "dark" ? "text-white" : "text-[#676262]";

  return (
    <div>
      <div className={`${bgColor} py-12`}>
        <h2
          className={`text-3xl font-semibold text-center lg:text-4xl ${headingColor}`}>
          {goalsData.heading}
        </h2>
        <p className={`text-lg text-center font-extralight ${textColor}`}>
          {goalsData.desc}
        </p>
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-3">
          {goalsData.goalImg.map((img, index) => (
            <span
              key={index}
              className="flex flex-col items-center justify-center gap-5">
              <img src={img.img} alt="goal" className="w-20 h-20" />
              <p className={`${textColor}`}>{img.info}</p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
