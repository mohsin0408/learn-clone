import React, { useState } from "react";
import Course from "./Course";
import { IoSearch } from "react-icons/io5";
import FilterList from "./FilterList";
import { courseData, categoryData, authorData } from "../Data/Data";
import { setAuthor, setCategory, setFilteredCourses } from "./Store/Store";
import { useDispatch, useSelector } from "react-redux";

const AllCourses = () => {
  const dispatch = useDispatch();
  const [categoryToggle, setCategoryToggle] = useState(false);
  const [authorToggle, setAuthorToggle] = useState(false);
  const [filteredCoursesList, setFilteredCoursesList] = useState(
    courseData.data || []
  );
  const [currentSelectedCategory, setCurrentSelectedCategory] = useState(
    categoryData[0]
  );

  const [currentSelectedAuthor, setCurrentSelectedAuthor] = useState(
    authorData[0]
  );
  const handleCategoryFilter = (item) => {
    setCurrentSelectedCategory(item);

    const filteredData = courseData?.data?.filter((course) => {
      const matchCategory = item === "All" || item === course.category;
      return matchCategory;
    });
    setFilteredCoursesList(filteredData);
    setCategoryToggle(!categoryToggle);
  };

  const handleAuthorFilter = (item) => {
    setCurrentSelectedAuthor(item);

    const filteredData = courseData?.data?.filter((course) => {
      const matchAuthor = item === "All" || item === course.tutor;

      return matchAuthor;
    });
    setFilteredCoursesList(filteredData);
    setAuthorToggle(!authorToggle);
  };

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
                {currentSelectedCategory}
              </p>
            </span>
            {categoryToggle === true ? (
              <span className="absolute p-2 border-2 bg-white shadow-[0px_0px_55px_15px_rgba(0,_0,_0,_0.1)] ">
                {categoryData?.map((item, index) => {
                  return (
                    <FilterList
                      key={index}
                      item={item}
                      index={index}
                      toggle={categoryToggle}
                      onClick={() =>
                        handleCategoryFilter(item, index, "çategory")
                      }
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
                {currentSelectedAuthor}
              </p>
            </span>
            {authorToggle === true ? (
              <span className="absolute p-2 border-2 bg-white shadow-[0px_0px_55px_15px_rgba(0,_0,_0,_0.1)] ">
                {authorData?.map((item, index) => {
                  return (
                    <FilterList
                      key={index}
                      item={item}
                      index={index}
                      toggle={authorToggle}
                      onClick={() => handleAuthorFilter(item, index, "author")}
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
        <Course courseData={filteredCoursesList} />
      </div>
    </div>
  );
};

export default AllCourses;
