import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Membership from "./Membership";
import Course from "./Course";
import Review from "./Review";
import Question from "./Question";
import { courseData, heroData } from "../Data/Data";

const Home = () => {
  return (
    <>
      <Header />
      <Hero heroData={heroData} />
      <Membership />
      <Course courseData={courseData?.data} />
      <Review />
      <Question />
    </>
  );
};

export default Home;
