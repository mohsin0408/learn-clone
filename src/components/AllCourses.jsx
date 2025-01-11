import React, { useState } from "react";
import Course from "./Course";
import { IoSearch } from "react-icons/io5";
import FilterList from "./FilterList";

const AllCourses = () => {
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [authorToggle, setAuthorToggle] = useState(false);
  const categoryData = [
    "All",
    "Web Development",
    "Frontend",
    "Backend",
    "AWS",
    "Python",
    "Testing",
    "AI",
    "Mobile Apps",
    "Fullstacks",
    "Dvelopment Operations",
    "Data Analytics",
    "Membership",
  ];
  const authorData = [
    "All",
    "Max Schwarzmuller",
    "Manuel Lorenz",
    "Max & Manuel",
  ];
  return (
    <div className=" bg-[#f1f0f0] flex flex-col items-center ">
      <div className="flex flex-col justify-between gap-2 p-5 md:flex-row w-[53%]">
        <div className="flex gap-3">
          <div className="relative">
            <span className="flex gap-2 ">
              <p className="text-[#989898] text-xl ">Category:</p>
              <p
                onClick={() => setCategoryToggle(!categoryToggle)}
                className="text-xl text-[#5A00C7] ">
                All
              </p>
            </span>
            {categoryToggle === true ? (
              <span className="absolute p-2 border-2 bg-white shadow-[0px_0px_55px_15px_rgba(0,_0,_0,_0.1)] ">
                {categoryData?.map((item, index) => {
                  return (
                    <FilterList
                      item={item}
                      index={index}
                      toggle={categoryToggle}
                    />
                  );
                })}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="relative">
            <span className="flex gap-2">
              <p className="text-[#989898] text-xl ">Author:</p>
              <p
                onClick={() => setAuthorToggle(!authorToggle)}
                className="text-xl text-[#5A00C7] ">
                All
              </p>
            </span>
            {authorToggle === true ? (
              <span className="absolute p-2 border-2 bg-white shadow-[0px_0px_55px_15px_rgba(0,_0,_0,_0.1)] ">
                {authorData?.map((item, index) => {
                  return (
                    <FilterList
                      item={item}
                      index={index}
                      toggle={authorToggle}
                    />
                  );
                })}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center">
          <input
            placeholder="Find a Product"
            className="h-8 px-4 py-1 border-2 "
          />
          <span className="p-[7px] border-2 bg-white hover:bg-[#f1f0f0] cursor-pointer ">
            <IoSearch />
          </span>
        </div>
      </div>
      <div>
        <Course />
      </div>
    </div>
  );
};

export default AllCourses;
