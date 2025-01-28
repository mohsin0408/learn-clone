import React from "react";

const Button = ({ text, rounded, px, py }) => {
  const padding = {
    paddingLeft: px ? `${px}` : undefined,
    paddingRight: px ? `${px}` : undefined,
    paddingTop: py ? `${py}` : undefined,
    paddingBottom: py ? `${py}` : undefined,
  };

  const roundedClass =
    rounded === "full" ? "rounded-full" : `rounded-${rounded || "md"}`;
  return (
    <>
      {Array.isArray(text) ? (
        text.map((item, index) => (
          <button
            key={index}
            className={`border border-[#5A00C7]  bg-[#5A00C7] hover:bg-[#42048e] text-white 
              ${roundedClass} font-semibold mr-4`}
            style={padding}>
            {item}
          </button>
        ))
      ) : (
        <button
          className={`border border-[#5A00C7]  bg-[#5A00C7] hover:bg-[#42048e] text-white 
            ${roundedClass} font-semibold `}
          style={padding}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
