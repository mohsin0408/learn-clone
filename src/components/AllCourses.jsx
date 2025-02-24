import React, { useState } from "react";
import Course from "./Course";
import FilterList from "./FilterList";
import { IoSearch } from "react-icons/io5";
import { courseData, categoryData, authorData } from "../Data/Data";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setAuthor, filterCourses } from "./Store/Store";

const AllCourses = () => {
  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const author = useSelector((state) => state.author);
  const filteredCourses = useSelector((state) => state.filteredCourses);

  const [categoryToggle, setCategoryToggle] = useState(false);
  const [authorToggle, setAuthorToggle] = useState(false);
  const [currentSelectedCategory, setCurrentSelectedCategory] =
    useState(category);
  const [currentSelectedAuthor, setCurrentSelectedAuthor] = useState(author);

  console.log(filteredCourses);

  const handleCategoryFilter = (item, index) => {
    console.log(item, author, courseData, index, "item1");
    setCurrentSelectedCategory(item);
    dispatch(setCategory(item));
    dispatch(filterCourses(item, author, courseData));
    setCategoryToggle(!categoryToggle);
  };

  console.log("help me");

  const handleAuthorFilter = (item, index) => {
    console.log(item, category, courseData, index, "item");
    setCurrentSelectedAuthor(item);
    dispatch(setAuthor(item));
    dispatch(filterCourses(category, item, courseData));
    setAuthorToggle(!authorToggle);
  };

  return (
    <div className="bg-[#f1f0f0] flex flex-col items-center">
      <div className="flex flex-col items-center justify-between w-full sm:w-[53%] gap-3 px-5 py-10 md:flex-row">
        <div className="flex flex-col gap-7 sm:flex-row self-baseline ">
          <div className="relative">
            <span className="flex gap-2 ">
              <p className="text-[#989898] text-xl ">Category:</p>
              <p
                onClick={() => setCategoryToggle(!categoryToggle)}
                className="text-xl text-[#5A00C7] ">
                {currentSelectedCategory}
              </p>
            </span>
            {categoryToggle === true ? (
              <span className="absolute z-20 p-2 border-2 bg-white shadow-[0px_0px_55px_15px_rgba(0,_0,_0,_0.1)] ">
                {categoryData?.map((item, index) => (
                  <FilterList
                    key={index}
                    item={item}
                    onClick={() => handleCategoryFilter(item, index)}
                  />
                ))}
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
                {currentSelectedAuthor}
              </p>
            </span>
            {authorToggle === true ? (
              <span className="absolute p-2 border-2 bg-white shadow-[0px_0px_55px_15px_rgba(0,_0,_0,_0.1)] ">
                {authorData?.map((item, index) => (
                  <FilterList
                    key={index}
                    item={item}
                    onClick={() => handleAuthorFilter(item)}
                  />
                ))}
              </span>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex items-center ">
          <input
            placeholder="Find a Product"
            className=" w-[300px] sm:w-[220px]  px-4 py-1 border-2  h-11"
          />
          <span className="py-[10px] px-[16px] text-lg h-11 border-2 bg-white hover:bg-[#f1f0f0] cursor-pointer ">
            <IoSearch />
          </span>
        </div>
      </div>

      <div>
        {filteredCourses.length === 0 ? (
          <Course courseData={courseData?.data} />
        ) : (
          <Course courseData={filteredCourses} />
        )}
      </div>
    </div>
  );
};

export default AllCourses;
