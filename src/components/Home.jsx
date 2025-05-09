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
import { useNavigate } from "react-router-dom";

const Home = ({ planRef, goToRefs }) => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://optimist-dev-backend.onrender.com/api/courses").then((res) =>
      res
        .json()
        .then((data) => setData(data))
        .catch((error) => console.log(error.message))
    );
  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate("/login");
    }
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <Hero heroData={heroData} goToRefs={goToRefs} />
      <NewVideo />
      <Goals />
      <MoneyBack />
      <Membership />
      <Course courseData={data?.courses} />
      <Review />
      <Question />
      <Membership planRef={planRef} />
    </>
  );
};

export default Home;
