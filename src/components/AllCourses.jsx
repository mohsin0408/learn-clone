import React, { useState } from "react";
import Course from "./Course";
import { IoSearch } from "react-icons/io5";

const AllCourses = () => {
  const [toggle, setToggle] = useState(false);
  const [newToggle, setNewToggle] = useState(false);
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
    <div className=" bg-[#f1f0f0] ">
      <div>
        <div>
          <span>Category</span>
          <span onClick={() => setToggle(!toggle)}>All</span>
          {categoryData.map((item, index) => {
            return (
              <div key={index}>
                <div>{toggle && <p>{item}</p>}</div>
              </div>
            );
          })}
        </div>
        <div>
          <span>Author</span>
          <span onClick={() => setNewToggle(!newToggle)}>All</span>
          {authorData.map((item, index) => {
            return (
              <div key={index}>
                <div>{newToggle && <p>{item}</p>}</div>
              </div>
            );
          })}
        </div>
        <div>
          <input placeholder="Find a Product" />
          <IoSearch />
        </div>
      </div>
      <div>
        <Course />
      </div>
    </div>
  );
};

export default AllCourses;
