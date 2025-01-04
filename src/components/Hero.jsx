import React from "react";
import Button from "./Button";

const Hero = () => {
  const heroData = {
    title: "The Academind Pro Membership",
    desc: "Unlock unlimited learning with instant access to 50 courses and continuous updates.",
    btnText: "Get Full Access Now",
  };

  return (
    <div className="hero py-[150px] flex items-center justify-center">
      <div className="relative z-10 text-center sm:w-[100%] lg:w-[75%] ">
        <h1 className="text-[#FFC675] text-5xl font-semibold ">
          {heroData?.title}
        </h1>
        <p className="mb-12 mx-[2px] sm:mx-[30px] xl:mx-[195px] text-3xl text-white pt-7">
          {heroData?.desc}
        </p>
        <Button text={heroData?.btnText} rounded="full" />
      </div>
    </div>
  );
};

export default Hero;
