import React from "react";
import Button from "./Button";

const Hero = ({ heroData, goToRefs }) => {
  return (
    <div
      className={`hero py-[150px] flex items-center justify-center relative  `}
      style={{
        background: `url(${heroData?.image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: " cover ",
        height: "475px",
      }}>
      <div className="relative z-10 text-center sm:w-[100%] lg:w-[75%]">
        <h1 className="text-[#FFC675] px-1 md:text-5xl text-4xl font-semibold">
          {heroData?.title ? heroData?.title : heroData?.course?.title}
        </h1>
        <p className="mb-12 mx-[2px] sm:mx-[30px] xl:mx-[195px] text-2xl md:text-3xl text-white px-1 pt-7 ">
          {heroData?.subtitle ? heroData?.subtitle : heroData?.course?.subtitle}
        </p>
        <div className="flex items-center justify-center gap-4">
          <Button
            text={heroData.btnText}
            rounded="full"
            px="30px"
            py="12px"
            clickHandler={goToRefs}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
