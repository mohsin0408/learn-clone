import React from "react";
import { Link } from "react-router-dom";

const Course = ({ courseData }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-between ">
        <h3 className=" self-baseline pl-[372px]">
          Courses Included with Purchase
        </h3>
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-4 md:grid-cols-2 ">
          {courseData?.map((obj, index) => {
            return (
              <Link
                to={`/course/${obj.slug}`}
                key={index}
                className=" w-[300px] h-full flex flex-col bg-[#f7f7f7] shadow-[0px_1px_#d4baf3] 
          border border-[#d4baf3] rounded-[9px] overflow-hidden cursor-pointer lg:w-[380px] hover:border-[#9d5ee8] hover:border-2 ">
                <img src={obj?.img} className="object-cover " />
                <div className="flex flex-col justify-between h-full gap-10 px-4 py-5">
                  <div>
                    <span className=" text-[#5A00C7] text-lg font-bold ">
                      {obj?.title}
                    </span>
                    <p className="text-sm line-clamp-2">{obj?.desc}</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p>{obj?.tutor}</p>
                    <p className="text-[#5a05c2] text-sm font-bold ">
                      {obj?.price}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
