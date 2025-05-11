import React, { useEffect, useRef, useState } from "react";
import Registration from "./components/Registration";
import Login from "./components/Login";
import AllCourses from "./components/AllCourses";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./components/Home";
import SingleCourse from "./components/SingleCourse";
import Header from "../src/components/Header";
import { Provider } from "react-redux";
import store from "../src/components/Store/Store";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import EnrollCourses from "./components/EnrollCourses";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <AppWithRouter />
      </Router>
    </Provider>
  );
};

const AppWithRouter = () => {
  const planRef = useRef(null);
  const promoRef = useRef(null);
  const location = useLocation();
  const [pathname, setPathname] = useState(null);

  const handlePathname = (name) => {
    setPathname(name);
  };

  const isLecturePage =
    location.pathname.includes("/course/") &&
    location.pathname.includes("/Lectures/");

  const goToRefs = () => {
    if (planRef.current) {
      planRef.current.scrollIntoView({
        behavior: "smooth",
      });
    } else if (promoRef.current) {
      promoRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    setPathname(location.pathname);
  }, [location]);

  return (
    <>
      {!isLecturePage &&
        (pathname === "/login" || pathname === "/" ? (
          <Header handlePathname={handlePathname} showLinks={false} />
        ) : (
          <Header handlePathname={handlePathname} showLinks={true} />
        ))}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<Home planRef={planRef} goToRefs={goToRefs} />}
        />
        <Route
          path="/course/:slug"
          element={
            <SingleCourse
              planRef={planRef}
              goToRefs={goToRefs}
              promoRef={promoRef}
            />
          }
        />
        <Route path="/allcourses" element={<AllCourses />} />
        <Route
          path="/course/:slug/lectures/:id"
          element={<Dashboard handlePathname={handlePathname} />}
        />
        <Route path="/enroll-courses" element={<EnrollCourses />} />
      </Routes>
      {!isLecturePage &&
        (pathname === "/login" || pathname === "/" ? (
          <Footer handlePathname={handlePathname} showLinks={false} />
        ) : (
          <Footer handlePathname={handlePathname} showLinks={true} />
        ))}
    </>
  );
};

export default App;
