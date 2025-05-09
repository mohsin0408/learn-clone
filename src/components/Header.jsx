import React, { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = ({ handlePathname, showLinks }) => {
  const [toggle, setToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    handlePathname(location?.pathname);
  }, [location, handlePathname]);

  const headerData = {
    logo: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://cdn.filestackcontent.com/QaXgiMolT9eAmFXmB8VY",
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

  return (
    <>
      <div className="flex items-center justify-between h-16 z-50 gap-5 px-10 md:px-32 sticky top-0 bg-[rgba(47,43,59,0.97)]">
        <Link to={"/Home"}>
          <img src={headerData.logo} alt="logo" />
        </Link>
        <span className="flex gap-5">
          {showLinks && (
            <ul className="items-center justify-center hidden gap-5 cursor-pointer lg:flex">
              {headerData.links.map((item, index) => (
                <li key={index}>
                  <Link to={item.link} className="text-white hover:text-[#ccc]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <span>
            {showLinks && (
              <div className="flex items-center gap-2">
                <FaCircleUser
                  className="invisible text-3xl text-white lg:visible "
                  onClick={() => {
                    setProfileToggle(!profileToggle);
                  }}
                />
                <span className="text-white max-lg:hidden">{user?.name}</span>
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
          {showLinks && (
            <RxHamburgerMenu
              className="text-3xl text-white lg:invisible"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </span>
      </div>

      {/* Hamburger Menu */}

      {toggle && (
        <ul className="fixed z-50 w-[100%] bg-[rgba(47,43,59,0.97)] p-2">
          {headerData.links.map((link, index) => (
            <li key={index} className="w-full p-2 text-white">
              <Link to={link.link} onClick={() => setToggle(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="p-2">
            <div className="flex items-center gap-2">
              <FaCircleUser className="text-3xl text-white" />
              <span className="text-white lg:hidden">{user?.name}</span>
            </div>
            <span className="text-white" onClick={() => handleLogout()}>
              Logout
            </span>
            {/* {profileToggle && (
              <ul className="absolute bg-[rgba(238,237,241,0.97)]">
                <li onClick={() => handleLogout()}>{item.name}</li>) }
              </ul>
            )} */}
          </div>
        </ul>
      )}
    </>
  );
};

export default Header;
