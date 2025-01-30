import React from "react";
import { useLocation } from "react-router-dom";

const Footer = ({ handlePathname, showLinks }) => {
  const location = useLocation();
  handlePathname(location?.pathname);
  return (
    <div className="bg-[#2F2B3B] py-5 flex  items-center px-44 gap-64">
      <p className="text-[#bac1c7]">© Academind 2025</p>
      {showLinks && (
        <ul>
          <li className="text-[#bac1c7] hover:text-white ">Terms of Use</li>
          <li className="text-[#bac1c7] hover:text-white ">Privacy Policy</li>
        </ul>
      )}
    </div>
  );
};

export default Footer;
