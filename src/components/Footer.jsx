import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Footer = ({ handlePathname, showLinks }) => {
  const location = useLocation();
  useEffect(() => {
    handlePathname(location?.pathname);
  }, [location, handlePathname]);
  return (
    <div className="bg-[#fbf9f9] py-5 flex items-center px-6 sm:px-24 gap-6 sm:gap-12">
      <p className="text-black">© Academind 2021</p>
      {showLinks && (
        <ul>
          <li className="text-black hover:text-white ">Terms of Use </li>
          <li className="text-black hover:text-white ">Privacy Policy</li>
        </ul>
      )}
    </div>
  );
};

export default Footer;
