import React, { useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa6";
import Button from "./Button";
import { Link, useParams } from "react-router-dom";

const Curriculum = ({ dashboard, lectures }) => {
  const { slug } = useParams();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 ">
        <h2 className="mt-5 text-3xl ">Course Curriculum</h2>
        <div className="">
          {lectures?.map((obj, index) => (
            <div key={index}>
              <p className="px-4 py-3 gap-4 bg-[#e8e8e8] text-lg font-semibold ">
                {obj?.title}
              </p>
              <p>
                {obj?.chapters?.map((item) => {
                  return (
                    <div key={item.id} className="w-full text-base">
                      <Link to={`/course/${slug}/Lectures/${item.id}`}>
                        <div className="flex items-center cursor-pointer w-full justify-between py-3 px-4 bg-[#f0f0f0] border-b-2 border-b-white gap-2 md:gap-20 hover:text-[#430094] hover:bg-[#e0d2f0]">
                          <span className="flex items-center gap-3 line-clamp-2">
                            <div>
                              <FaYoutube className="text-2xl" />
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
