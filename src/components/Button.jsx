import React from "react";

const Button = ({ text, obj, rounded, px, py, clickHandler }) => {
  const padding = {
    paddingLeft: px ? `${px}` : undefined,
    paddingRight: px ? `${px}` : undefined,
    paddingTop: py ? `${py}` : undefined,
    paddingBottom: py ? `${py}` : undefined,
  };

  return (
    <>
      {Array.isArray(text) ? (
        text.map((item, index) => (
          <button
            onClick={() => clickHandler(obj)}
            key={index}
            className={`border border-[#5A00C7]  bg-[#5A00C7] hover:bg-[#42048e] text-white 
              ${
                rounded === "full"
                  ? "rounded-full"
                  : `rounded-${rounded || "md"}`
              } font-semibold`}
            style={padding}>
            {item}
          </button>
        ))
      ) : (
        <button
          onClick={() => clickHandler(obj)}
          className={`border border-[#5A00C7]  bg-[#5A00C7] hover:bg-[#42048e] text-white 
             ${
               rounded === "full"
                 ? "rounded-full"
                 : `rounded-${rounded || "md"}`
             }  font-semibold `}
          style={padding}>
          {text}
        </button>
      )}
    </>
  );
};

export default Button;
