import React from "react";
import Button from "./Button";
import MemberShipCard from "./MemberShipCard";
import { useSelector } from "react-redux";

const Membership = ({ planRef }) => {
  const theme = useSelector((state) => state.theme);

  const membershipData = [
    {
      id: "1",
      heading: "Annual",
      desc: "Unlimited access to all current & future Academind courses",
      price: "$249/year",
      info: "This is a recurring payment, charged automatically on a yearly basis. You can cancel anytime from inside your user profile to avoid being charged again once your billing cycle ends. For more information, please contact Academind.",
      btnText: "Join Pro",
    },
    {
      id: "2",
      heading: "Monthly",
      desc: "Best choice! Full flexibility and unlimited course access!",
      price: "$25/month",
      info: "This is a recurring payment, charged automatically on a monthly basis. You can cancel anytime from inside your user profile to avoid being charged again once your billing cycle ends. For more information, please contact Academind.",
      btnText: "Join Pro",
    },
  ];

  const bgColor = theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#f1f0f0]";
  const textColor = theme === "dark" ? "text-gray-100" : "text-[#272626]";

  return (
    <div className={`p-9 ${bgColor}`} ref={planRef}>
      <h2 className={`text-center font-bold text-3xl mt-5 mb-10 ${textColor}`}>
        Join Now and Become a Pro Member!
      </h2>
      <div className="flex flex-wrap items-center justify-center w-full h-full gap-10 ">
        {membershipData.map((obj, index) => (
          <MemberShipCard obj={obj} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Membership;
