import React from "react";
import Course from "./Course";

const AllCourses = () => {
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
          <span>All</span>
        </div>
        <div>
          <span>Author</span>
          <span>All</span>
        </div>
        <div></div>
      </div>
      <div>
        <Course />
      </div>
    </div>
  );
};

export default AllCourses;
