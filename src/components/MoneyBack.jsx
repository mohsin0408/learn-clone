import React from "react";
import { goalsData } from "../Data/Data";

const MoneyBack = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center sm:w-[50%] w-[100%] gap-5 p-5">
        <img
          src={goalsData.singleImg}
          alt="goal"
          className="object-cover w-[200px] h-[200px]  "
        />
        <h2 className="text-3xl font-semibold text-center lg:text-xl ">
          {goalsData.secondHeading}
        </h2>
        <p className="text-lg text-center font-extralight ">
          {goalsData.secondDesc}
        </p>
      </div>
    </div>
  );
};

export default MoneyBack;
