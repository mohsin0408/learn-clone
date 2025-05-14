import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Footer = ({ handlePathname, showLinks }) => {
  const location = useLocation();
  const theme = useSelector((state) => state.theme);

  useEffect(() => {
    handlePathname(location?.pathname);
  }, [location, handlePathname]);

  const bgColor = theme === "dark" ? "bg-[#1e1e1e]" : "bg-[#fbf9f9]";
  const textColor = theme === "dark" ? "text-gray-300" : "text-black";
  const hoverText =
    theme === "dark" ? "hover:text-gray-100" : "hover:text-gray-600";

  return (
    <div
      className={`${bgColor} py-5 flex items-center px-6 sm:px-24 gap-6 sm:gap-12`}>
      <p className={`${textColor}`}>© Academind 2021</p>
      {showLinks && (
        <ul className="flex flex-col gap-1">
          <li className={`${textColor} ${hoverText}`}>Terms of Use</li>
          <li className={`${textColor} ${hoverText}`}>Privacy Policy</li>
        </ul>
      )}
    </div>
  );
};

export default Footer;
