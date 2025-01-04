import React from "react";

const Button = ({ text, rounded }) => {
  return (
    <button
      className={`border border-[#5A00C7] px-8 py-3 bg-[#5A00C7] hover:bg-[#42048e] text-white rounded-${rounded} font-semibold`}>
      {text}
    </button>
  );
};

export default Button;
