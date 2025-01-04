import React from "react";
import Button from "./Button";

const Membership = () => {
  const membershipData = [
    {
      id: "1",
      heading: "Annual Membership",
      desc: "Unlimited access to all current & future Academind courses",
      price: "$249/year",
      info: "This is a recurring payment, charged automatically on a yearly basis. You can cancel anytime from inside your user profile to avoid being charged again once your billing cycle ends. For more information, please contact Academind.",
      btnText: "Join Pro",
    },
    {
      id: "2",
      heading: "Monthly Membership",
      desc: "Best choice! Full flexibility and unlimited course access!",
      price: "$25/month",
      info: "This is a recurring payment, charged automatically on a monthly basis. You can cancel anytime from inside your user profile to avoid being charged again once your billing cycle ends. For more information, please contact Academind.",
      btnText: "Join Pro",
    },
  ];
  return (
    <div className="p-9 bg-[#3c374b] mt-3">
      <h2 className="text-center text-[#ffc675] font-bold text-3xl mt-5 mb-10 ">
        Join Now and Become a Pro Member!
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-10 ">
        {membershipData.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col p-8 text-center border border-black  w-full sm:w-[48%] md:w-[28%] bg-[#2e2b3b] border-none shadow-xl rounded-xl ">
            <span className="py-5 text-4xl font-bold text-center text-white ">
              {obj?.heading}
            </span>
            <span className="mb-3 text-base text-white ">{obj?.desc}</span>
            <span className=" text-[#ffc675] text-5xl  font-bold leading-[85px] border-t border-[#ccc] ">
              {obj?.price}
            </span>
            <span className="mb-3 text-xs text-white ">{obj?.info}</span>
            <span>
              <Button text={obj?.btnText} rounded="md" />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Membership;
