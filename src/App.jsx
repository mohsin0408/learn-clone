import React from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import Curriculum from "./components/Curriculum";
import AllCourses from "./components/AllCourses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Curriculum" element={<Curriculum />} />
          <Route path="/AllCourses" element={<AllCourses />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
