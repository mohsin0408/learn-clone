import React, { useState, useEffect } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, useLocation } from "react-router-dom";

const Header = ({ handlePathname, showLinks }) => {
  const [toggle, setToggle] = useState(false);
  const [profileToggle, setProfileToggle] = useState(false);
  const location = useLocation();

  useEffect(() => {
    handlePathname(location?.pathname);
  }, [location, handlePathname]);

  const headerData = {
    logo: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://cdn.filestackcontent.com/QaXgiMolT9eAmFXmB8VY",
    links: [
      { name: "What is Academind Pro", link: "/Home" },
      { name: "All Courses", link: "/AllCourses" },
      { name: "Enrolled Courses", link: "#" },
      { name: "Community & Support", link: "#" },
    ],
    userData: [
      { name: "Refer a Friend", link: "#" },
      { name: "Settings", link: "#" },
      { name: "Logout" },
    ],
  };

  return (
    <>
      <div className="flex items-center justify-between h-16 z-50 gap-5 px-10 md:px-32 sticky top-0 bg-[rgba(47,43,59,0.97)]">
        <img src={headerData.logo} alt="logo" />
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
              <FaCircleUser
                className="invisible text-3xl text-white lg:visible "
                onClick={() => {
                  setProfileToggle(!profileToggle);
                }}
              />
            )}

            {profileToggle && (
              <ul className=" absolute bg-[rgba(238,237,241,0.97)] hidden lg:block ">
                {headerData.userData.map((item, index) => (
                  <li key={index}>
                    {index === 2 ? (
                      <Link
                        to={"/Login"}
                        className="p-2"
                        onClick={() => setProfileToggle(false)}>
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        to={item.link}
                        className="flex p-2 border-b "
                        onClick={() => setProfileToggle(false)}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
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
        <ul className="fixed z-50 w-full bg-[rgba(47,43,59,0.97)] p-2">
          {headerData.links.map((link, index) => (
            <li key={index} className="p-2 text-white">
              <Link to={link.link} onClick={() => setToggle(false)}>
                {link.name}
              </Link>
            </li>
          ))}
          <div className="p-2">
            <FaCircleUser
              className="text-3xl text-white"
              onClick={() => {
                setProfileToggle(!profileToggle);
              }}
            />
            {profileToggle && (
              <ul className="absolute bg-[rgba(238,237,241,0.97)]">
                {headerData.userData.map((item, index) => (
                  <li key={index}>
                    {index === 2 ? (
                      <Link
                        to={"/Login"}
                        className="p-2"
                        onClick={() => {
                          setProfileToggle(false), setToggle(false);
                        }}>
                        {item.name}
                      </Link>
                    ) : (
                      <Link
                        to={item.link}
                        className="flex p-2 border-b "
                        onClick={() => setProfileToggle(false)}>
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </ul>
      )}
    </>
  );
};

export default Header;
