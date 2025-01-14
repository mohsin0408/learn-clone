import React from "react";
import Curriculum from "./Curriculum";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import Header from "./Header";

const SingleCourse = ({ courseData }) => {
  const params = useParams();
  const course = courseData?.find((course) => course.slug === params.slug);

  const modifiedData = {
    ...course,
    btnText: ["Watch Promo", "Enroll in Course"],
  };
  console.log("modifiedData", modifiedData);

  return (
    <div>
      <Header />
      <Hero heroData={modifiedData} />
      <Curriculum />
    </div>
  );
};

export default SingleCourse;
