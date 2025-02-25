import React from "react";
import Hero from "./Hero";
import Membership from "./Membership";
import Course from "./Course";
import Review from "./Review";
import Question from "./Question";
import { courseData, heroData } from "../Data/Data";
import Video from "./video";
import Goals from "./Goals";
import MoneyBack from "./MoneyBack";

const Home = () => {
  return (
    <>
      <Hero heroData={heroData} />
      <Video />
      <Goals />
      <MoneyBack />
      <Membership />
      <Course courseData={courseData?.data} />
      <Review />
      <Question />
    </>
  );
};

export default Home;
