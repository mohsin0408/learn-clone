import React, { useEffect, useState } from "react";
import Curriculum from "./Curriculum";
import Hero from "./Hero";
import { useParams } from "react-router-dom";
import CourseInfo from "./CourseInfo";
import Review from "./Review";
import MoneyBack from "./MoneyBack";
import Question from "./Question";
import Membership from "./Membership";
import Instructor from "./Instructor";

const SingleCourse = () => {
  const [data, setData] = useState("");
  const { slug } = useParams();

  useEffect(() => {
    fetch(`https://optimist-dev-backend.onrender.com/api/course/${slug}`).then(
      (res) => res.json().then((data) => setData(data))
    );
  }, [slug]);

  console.log(data, "data");

  // const modifiedData = {
  //   ...course,
  //   btnText: ["Watch Promo", "Enroll in Course"],
  // };

  return (
    <div>
      <Hero heroData={data} />
      <CourseInfo infoData={data} />
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
