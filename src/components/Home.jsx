import React, { useState, useEffect } from "react";
import Hero from "./Hero";
import Membership from "./Membership";
import Course from "./Course";
import Review from "./Review";
import Question from "./Question";
import { heroData } from "../Data/Data";
import Goals from "./Goals";
import MoneyBack from "./MoneyBack";
import NewVideo from "./NewVideo";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    fetch("https://optimist-dev-backend.onrender.com/api/courses").then((res) =>
      res.json().then((data) => setData(data))
    );
  }, []);

  return (
    <>
      <Hero heroData={heroData} />
      <NewVideo />
      <Goals />
      <MoneyBack />
      <Membership />
      <Course courseData={data?.courses} />
      <Review />
      <Question />
      <Membership />
    </>
  );
};

export default Home;
