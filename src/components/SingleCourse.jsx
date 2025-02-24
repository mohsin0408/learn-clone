import React from "react";
import Curriculum from "./Curriculum";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import { singleCourseData } from "../Data/Data";
import CourseInfo from "./CourseInfo";

const SingleCourse = ({ courseData }) => {
  const params = useParams();
  const course = courseData?.find((course) => course.slug === params.slug);

  const modifiedData = {
    ...course,
    btnText: ["Watch Promo", "Enroll in Course"],
  };

  return (
    <div>
      <Hero heroData={modifiedData} />
      <div className="flex items-center justify-center ">
        <iframe
          height="500"
          width="700"
          src={singleCourseData?.videoUrl}
          className="py-2"></iframe>
      </div>
      <CourseInfo />
      <Curriculum />
    </div>
  );
};

export default SingleCourse;
