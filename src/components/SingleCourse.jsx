import React from "react";
import Curriculum from "./Curriculum";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import CourseInfo from "./CourseInfo";
import Review from "./Review";
import MoneyBack from "./MoneyBack";
import Question from "./Question";
import Membership from "./Membership";
import Instructor from "./Instructor";

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
      <CourseInfo />
      <Curriculum />
      <Review />
      <MoneyBack />
      <Question />
      <Instructor />
      <Membership />
    </div>
  );
};

export default SingleCourse;
