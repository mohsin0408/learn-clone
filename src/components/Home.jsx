import React from "react";
import Hero from "./Hero";
import Membership from "./Membership";
import Course from "./Course";
import Review from "./Review";
import Question from "./Question";
import { courseData, heroData } from "../Data/Data";
import Goals from "./Goals";
import MoneyBack from "./MoneyBack";
import NewVideo from "./NewVideo";

const Home = () => {
  return (
    <>
      <Hero heroData={heroData} />
      <NewVideo />
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
