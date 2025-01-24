import React, { useState } from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import AllCourses from "./components/AllCourses";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import SingleCourse from "./components/SingleCourse";
import { courseData } from "./Data/Data";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import store from "../src/components/Store/Store";

const App = () => {
  const [pathname, setPathname] = useState(null);
  const handlePathname = (name) => {
    setPathname(name);
  };

  return (
    <Provider store={store}>
      <Router>
        {pathname === "/Login" || pathname === "/" ? (
          <Header handlePathname={handlePathname} showLinks={false} />
        ) : (
          <Header handlePathname={handlePathname} showLinks={true} />
        )}
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
    </Provider>
  );
};

export default App;
