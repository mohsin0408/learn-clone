import React, { useState } from "react";
import { FaCircleUser } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  console.log("toggle", toggle);

  const headerData = [
    {
      logo: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=height:60/https://cdn.filestackcontent.com/QaXgiMolT9eAmFXmB8VY",
    },
    {
      links: [
        "What is Academind Pro",
        "All Courses",
        "Enrolles Courses",
        "Community & Support",
      ],
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center z-50 gap-5 px-10 md:px-20 sticky top-0 bg-[rgba(47,43,59,0.97)] ">
        {headerData.map((obj, index) => (
          <>
            <img src={obj.logo} />
            <ul
              key={index}
              className="items-center justify-center hidden gap-5 cursor-pointer lg:flex">
              {obj.links?.map((link, index) => (
                <li key={index} className="text-white hover:text-[#ccc]">
                  {index === 1 ? <Link to="/AllCourses">{link}</Link> : link}
                </li>
              ))}
            </ul>
          </>
        ))}

        <FaCircleUser className="invisible text-3xl text-white lg:visible " />
        <RxHamburgerMenu
          className="visible text-3xl text-white lg:invisible"
          onClick={() => setToggle(!toggle)}
        />
      </div>

      {/* Hamburger */}

      {toggle && (
        <ul className="fixed z-50 w-full ">
          {headerData[1].links?.map((link, index) => (
            <li
              key={index}
              className="text-white bg-[rgba(47,43,59,0.97)] p-2 ">
              {index === 1 ? <Link to="/AllCourses">{link}</Link> : link}
            </li>
          ))}
          <div className="  bg-[rgba(47,43,59,0.97)] p-2 ">
            <FaCircleUser className="text-3xl text-white lg:visible" />
          </div>
        </ul>
      )}
    </>
  );
};

export default Header;
