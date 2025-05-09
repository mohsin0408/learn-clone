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

const SingleCourse = ({ planRef, goToRefs, promoRef }) => {
  const [singleCourseData, setSingleCourseData] = useState({});
  const [lectures, setlectures] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    fetch(
      `https://optimist-dev-backend.onrender.com/api/course-lectures/${slug}`
    )
      .then((res) =>
        res
          .json()
          .then((data) => setlectures(data.lectures.courseCurriculumData))
      )
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    fetch(`https://optimist-dev-backend.onrender.com/api/course/${slug}`)
      .then((res) => res.json())
      .then((singleCourseData) => setSingleCourseData(singleCourseData.course))
      .catch((error) => console.log(error.message));
  }, [slug]);

  const modifiedsingleCourseData = {
    ...singleCourseData,
    btnText: ["Watch Promo", "Enroll in Course"],
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <Hero heroData={modifiedsingleCourseData} goToRefs={goToRefs} />
      <CourseInfo infoData={singleCourseData} promoRef={promoRef} />
      <Curriculum lectures={lectures} />
      <Review />
      <MoneyBack />
      <Question />
      <Instructor instructorData={singleCourseData} />
      <Membership planRef={planRef} />
    </>
  );
};

export default SingleCourse;
