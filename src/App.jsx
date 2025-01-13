import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import AllCourses from "./components/AllCourses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SingleCourse from "./components/SingleCourse";
import { courseData } from "./Data/Data";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route
            path="/course/:slug"
            element={<SingleCourse courseData={courseData?.data} />}
          />
          <Route path="/AllCourses" element={<AllCourses />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
