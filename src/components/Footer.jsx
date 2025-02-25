import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = ({ handlePathname, showLinks }) => {
  const location = useLocation();
  useEffect(() => {
    handlePathname(location?.pathname);
  }, [location, handlePathname]);
  return (
    <div className="bg-[#2F2B3B] py-5 flex  items-center px-44 gap-64">
      <p className="text-[#bac1c7]">© Academind 2021</p>
      {showLinks && (
        <ul>
          <li className="text-[#bac1c7] hover:text-white ">Terms of Use </li>
          <li className="text-[#bac1c7] hover:text-white ">Privacy Policy</li>
        </ul>
      )}
    </div>
  );
};

export default Footer;
