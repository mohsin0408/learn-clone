import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa"; // Add icons for theme toggle
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // For Redux
import { toggleTheme } from "../components/Store/Action"; // Redux action
import logo from "../assets/images/newlogo.jpeg";

const Header = ({ handlePathname, showLinks }) => {
  const [toggle, setToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Dispatch function for Redux
  const theme = useSelector((state) => state.theme); // Get current theme from Redux store

  useEffect(() => {
    handlePathname(location?.pathname);
  }, [location, handlePathname]);

  const headerData = {
    logo: logo,
    links: [
      { name: "All Courses", link: "/AllCourses" },
      { name: "Enrolled Courses", link: "/enroll-courses" },
      {
        name: "Interview Expert",
        link: "https://interviewexpert.vercel.app/",
      },
    ],
  };

  const handleLogout = () => {
    console.log("Logout");
    localStorage.removeItem("user");
    navigate("/login");
    setProfileToggle(!profileToggle);
    setToggle(false);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleThemeToggle = () => {
    dispatch(toggleTheme()); // Dispatch the toggle theme action
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex items-center justify-between h-16 gap-5 px-10 bg-[#fbf9f9] border-b md:px-32 ">
        <Link to={"/Home"}>
          <img src={headerData.logo} alt="logo" className="w-[30%]" />
        </Link>
        <span className="flex gap-5">
          {showLinks && (
            <ul className="items-center justify-center hidden gap-5 cursor-pointer lg:flex">
              {headerData.links.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-black hover:text-[#ccc]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <span>
            {showLinks && (
              <div className="flex items-center gap-2">
                <FaUserCircle
                  className="invisible text-3xl text-black lg:visible"
                  onClick={() => {
                    setProfileToggle(!profileToggle);
                  }}
                />
                <span className="text-black max-lg:hidden">{user?.name}</span>
              </div>
            )}

            {profileToggle && (
              <ul className=" absolute bg-[rgba(238,237,241,0.97)] hidden lg:block cursor-pointer p-2">
                <li
                  onClick={() => {
                    handleLogout();
                  }}>
                  Logout
                </li>
              </ul>
            )}
          </span>
          <button></button>
          {showLinks && (
            <RxHamburgerMenu
              className="text-3xl text-black lg:invisible"
              onClick={() => setToggle(!toggle)}
            />
          )}
          {/* Theme Toggle Icon */}
          <button onClick={handleThemeToggle} className="text-black ">
            {theme === "light" ? (
              <FaMoon className="text-2xl" />
            ) : (
              <FaSun className="text-2xl" />
            )}
          </button>
        </span>
      </div>

      {/* Hamburger Menu */}
      {toggle && (
        <ul className="fixed z-50 w-[100%] bg-[#fbf9f9] p-2">
          {headerData.links.map((link, index) => (
            <li key={index} className="w-full p-2 text-black">
              <Link to={link.link} onClick={() => setToggle(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="p-2">
            <div className="flex items-center gap-2">
              <FaUserCircle className="text-3xl text-black" />
              <span className="text-black lg:hidden">{user?.name}</span>
            </div>
            <span className="text-black" onClick={() => handleLogout()}>
              Logout
            </span>
          </div>
        </ul>
      )}
    </>
  );
};

export default Header;
