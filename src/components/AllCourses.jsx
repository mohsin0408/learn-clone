import React, { useEffect, useState } from "react";
import Course from "./Course";
import FilterList from "./FilterList";
import { IoSearch } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setCategory, setAuthor, filterCourses } from "./Store/Action";

const AllCourses = () => {
  const [courseData, setCourseData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://optimist-dev-backend.onrender.com/api/courses").then((res) =>
      res
        .json()
        .then((data) => setCourseData(data.courses))
        .catch((error) => console.log(error.message))
    );
  }, []);

  const dispatch = useDispatch();
  const category = useSelector((state) => state.category);
  const author = useSelector((state) => state.author);
  const filteredCourses = useSelector((state) => state.filteredCourses);
  const theme = useSelector((state) => state.theme);

  const bgColor = theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#f1f0f0]";
  const textColor = theme === "dark" ? "text-white" : "text-[#272626]";
  const cardBg = theme === "dark" ? "bg-[#2c2c2c]" : "bg-white";
  const inputBg =
    theme === "dark"
      ? "bg-[#2c2c2c] text-white border-gray-600"
      : "bg-white text-black";
  const dropdownShadow =
    theme === "dark"
      ? "shadow-[0px_0px_25px_5px_rgba(255,_255,_255,_0.05)]"
      : "shadow-[0px_0px_55px_15px_rgba(0,_0,_0,_0.1)]";

  const [categoryToggle, setCategoryToggle] = useState(false);
  const [authorToggle, setAuthorToggle] = useState(false);
  const [currentSelectedCategory, setCurrentSelectedCategory] =
    useState(category);
  const [currentSelectedAuthor, setCurrentSelectedAuthor] = useState(author);

  const handleCategoryFilter = (item) => {
    setCurrentSelectedCategory(item);
    dispatch(setCategory(item));
    dispatch(filterCourses(item, author, courseData, searchQuery));
    setCategoryToggle(false);
  };

  const handleAuthorFilter = (item) => {
    setCurrentSelectedAuthor(item);
    dispatch(setAuthor(item));
    dispatch(filterCourses(category, item, courseData, searchQuery));
    setAuthorToggle(false);
  };

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    dispatch(filterCourses(category, author, courseData, value));
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className={`${bgColor} flex flex-col items-center min-h-screen`}>
      <div className="flex flex-col items-center justify-between w-full sm:w-[53%] gap-3 px-5 py-10 md:flex-row">
        <div className="flex flex-col gap-7 sm:flex-row self-baseline ">
          <div className="relative">
            <span className="flex gap-2 ">
              <p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-[#989898]"
                }`}>
                Category:
              </p>
              <p
                onClick={() => setCategoryToggle(!categoryToggle)}
                className="text-xl text-[#5A00C7] ">
                {currentSelectedCategory}
              </p>
            </span>
            {categoryToggle && (
              <span
                className={`absolute z-20 p-2 border-2 ${cardBg} ${dropdownShadow}`}>
                {courseData
                  .map((item, index) => item.category) // Getting unique categories
                  .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
                  .map((item, index) => (
                    <FilterList
                      key={index}
                      item={item}
                      onClick={() => handleCategoryFilter(item)}
                    />
                  ))}
              </span>
            )}
          </div>

          <div className="relative">
            <span className="flex gap-2">
              <p
                className={`text-xl ${
                  theme === "dark" ? "text-gray-300" : "text-[#989898]"
                }`}>
                Author:
              </p>
              <p
                onClick={() => setAuthorToggle(!authorToggle)}
                className="text-xl text-[#5A00C7] ">
                {currentSelectedAuthor}
              </p>
            </span>
            {authorToggle && (
              <span
                className={` absolute p-2 border-2  ${cardBg} ${dropdownShadow}`}>
                {courseData
                  .map((item) => item.tutor) // Getting unique authors
                  .filter((value, index, self) => self.indexOf(value) === index) // Remove duplicates
                  .map((item, index) => (
                    <FilterList
                      key={index}
                      item={item}
                      onClick={() => handleAuthorFilter(item)}
                    />
                  ))}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center ">
          <input
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by Title, Author or Category"
            className={`w-[300px] sm:w-[220px] px-4 py-1 h-11 border-2 ${inputBg}`}
          />
          <span
            className={`py-[10px] px-[16px] text-lg h-11 border-2 ${cardBg} hover:${bgColor} cursor-pointer`}>
            <IoSearch className={textColor} />
          </span>
        </div>
      </div>

      <div>
        {filteredCourses.length === 0 ? (
          <Course courseData={courseData} />
        ) : (
          <Course courseData={filteredCourses} />
        )}
      </div>
    </div>
  );
};

export default AllCourses;
