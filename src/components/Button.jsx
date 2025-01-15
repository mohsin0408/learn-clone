import React from "react";

const Button = ({ text, rounded, px }) => {
  return (
    <>
      {Array.isArray(text) ? (
        text.map((item) => (
          <button
            className={`border border-[#5A00C7] px-[${px}] py-3 bg-[#5A00C7] hover:bg-[#42048e] text-white rounded-${rounded} font-semibold mr-4`}>
            {item}
          </button>
        ))
      ) : (
        <button
          className={`border border-[#5A00C7] px-[${px}] py-3 bg-[#5A00C7] hover:bg-[#42048e] text-white rounded-${rounded} font-semibold `}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
