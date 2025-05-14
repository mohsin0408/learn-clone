import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Curriculum = ({ dashboard, lectures }) => {
  const { slug } = useParams();
  const theme = useSelector((state) => state.theme);

  const sectionBg = theme === "dark" ? "bg-[#2e2e2e]" : "bg-[#e8e8e8]";
  const itemBg = theme === "dark" ? "bg-[#3a3a3a]" : "bg-[#f0f0f0]";
  const hoverText =
    theme === "dark" ? "hover:text-[#b48dff]" : "hover:text-[#430094]";
  const hoverBg =
    theme === "dark" ? "hover:bg-[#4b3e66]" : "hover:bg-[#e0d2f0]";
  const textColor = theme === "dark" ? "text-white" : "text-black";

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 ">
        <h2 className={`mt-5 text-3xl ${textColor}`}>Course Curriculum</h2>
        <div className="">
          {lectures?.map((obj, index) => (
            <div key={index}>
              <p
                className={`px-4 py-3 gap-4 ${sectionBg} text-lg font-semibold ${textColor}`}>
                {obj?.title}
              </p>
              <p>
                {obj?.chapters?.map((item) => {
                  return (
                    <div key={item.id} className="w-full text-base">
                      <Link to={`/course/${slug}/Lectures/${item.id}`}>
                        <div
                          className={`flex items-center cursor-pointer justify-between py-3 px-4 border-b-2 border-b-white gap-2 md:gap-20 ${itemBg} ${hoverText} ${hoverBg}`}>
                          <span className="flex items-center gap-3 line-clamp-2">
                            <div>
                              <FaYoutube className={textColor} />
                            </div>
                            {item?.title}
                          </span>
                          {!dashboard && (
                            <Button
                              text="Preview"
                              rounded="md"
                              px="12px"
                              py="3px"
                            />
                          )}
                        </div>
                      </Link>
                    </div>
                  );
                })}
              </p>
            </div>
          ))}
        </div>
        {/* <div className=""></div> */}
      </div>
    </div>
  );
};

export default Curriculum;
