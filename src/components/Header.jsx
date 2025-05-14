import React, { useState, useEffect } from "react";
import { FaSun, FaMoon, FaUserCircle } from "react-icons/fa"; // Add icons for theme toggle
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; // For Redux
import { toggleTheme } from "../components/Store/Action"; // Redux action
import logo from "../assets/images/logo.jpeg";

const Header = ({ handlePathname, showLinks }) => {
  const [toggle, setToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme); // Get current theme

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
    localStorage.removeItem("user");
    navigate("/login");
    setProfileToggle(false);
    setToggle(false);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // 🔥 Theme-based classes
  const bgColor = theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#fbf9f9]";
  const textColor = theme === "dark" ? "text-white" : "text-black";
  const hoverColor =
    theme === "dark" ? "hover:text-gray-300" : "hover:text-[#ccc]";
  const dropdownBg =
    theme === "dark" ? "bg-[#2c2c2c]" : "bg-[rgba(238,237,241,0.97)]";

  return (
    <>
      <div
        className={`sticky top-0 z-50 flex items-center justify-between h-16 gap-5 px-10 border-b md:px-32 ${bgColor}`}>
        <Link to={"/Home"}>
          <img
            src={headerData.logo}
            alt="logo"
            className="w-[70%] xs:w-[50%] md:w-[30%]"
          />
        </Link>

        <span className="flex gap-5">
          {showLinks && (
            <ul className="items-center justify-center hidden gap-5 cursor-pointer lg:flex">
              {headerData.links.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className={`${textColor} ${hoverColor}`}>
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
                  className={`invisible text-3xl lg:visible ${textColor}`}
                  onClick={() => setProfileToggle(!profileToggle)}
                />
                <span className={`max-lg:hidden ${textColor}`}>
                  {user?.name}
                </span>
              </div>
            )}

            {profileToggle && (
              <ul
                className={`absolute ${dropdownBg} hidden lg:block cursor-pointer p-2`}>
                <li onClick={handleLogout}>Logout</li>
              </ul>
            )}
          </span>

          {showLinks && (
            <RxHamburgerMenu
              className={`text-3xl lg:invisible ${textColor}`}
              onClick={() => setToggle(!toggle)}
            />
          )}

          {/* Theme Toggle Button */}
          <button onClick={handleThemeToggle} className={`${textColor}`}>
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
        <ul className={`fixed z-50 w-full p-2 ${bgColor}`}>
          {headerData.links.map((link, index) => (
            <li key={index} className={`w-full p-2 ${textColor}`}>
              <Link to={link.link} onClick={() => setToggle(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="p-2">
            <div className="flex items-center gap-2">
              <FaUserCircle className={`text-3xl ${textColor}`} />
              <span className={`lg:hidden ${textColor}`}>{user?.name}</span>
            </div>
            <span className={textColor} onClick={handleLogout}>
              Logout
            </span>
          </div>
        </ul>
      )}
    </>
  );
};

export default Header;
