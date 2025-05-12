import React from "react";
import Button from "./Button";

// F0F6FF   #322d2b

const Hero = ({ heroData, goToRefs }) => {
  return (
    <div
      className="flex flex-col gap-10 py-10 md:py-[100px] items-center justify-center px-10 md:flex-row hero"
      style={{
        background:
          "linear-gradient(0deg, #f3e8ff 0%, #f1f0f0 50%, #ffffff 100%)",
      }}>
      <div className=" z-10 w-[100%] ">
        <h1 className="px-1 text-center text-4xl font-semibold text-[#7F00FF] md:text-5xl">
          {heroData?.title ? heroData?.title : heroData?.course?.title}
        </h1>
        <p className="mb-12 text-2xl md:text-3xl text-[#676262] px-[10px] pt-7 ">
          {heroData?.subtitle ? heroData?.subtitle : heroData?.course?.subtitle}
        </p>
        <div className="flex items-center justify-center gap-4 px-1">
          <Button
            text={heroData.btnText}
            rounded="full"
            px="30px"
            py="12px"
            clickHandler={goToRefs}
          />
        </div>
      </div>
      <img
        src={heroData?.image}
        alt="hero"
        className="w-[100%] sm:w-[75%] md:w-[50%] rounded-xl shadow-md "
      />
    </div>
  );
};

export default Hero;

// style={{
//         background: `url(${heroData?.image})`,
//         backgroundRepeat: "no-repeat",
//         backgroundPosition: "center",
//         backgroundSize: " cover ",
//         height: "475px",
//       }}
