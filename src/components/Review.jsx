import React from "react";

const Review = () => {
  const reviewData = [
    {
      id: "1",
      heading: "Robert Kwarta",
      desc: "Max is truly an amazingly talented gift to the development community. His courses are very thoughtfully conceived and arranged and are expertly delivered with clarity, detail, explanation, and authority.",
    },
    {
      id: "2",
      heading: "Damien Briggs",
      desc: "As always with Maximilian Schwarzmüller, the explanation of each concept is exceptionally clear and the structure of the material is superb.",
    },
    {
      id: "3",
      heading: "Brett Gamble",
      desc: "The depth of the tutorials and the explanations provided make this a really well thought out learning experience. I would recommend any of the Academind courses to anyone wanting to really learn front end web development (JavaScript, React, Angular, Html & Css).",
    },
  ];
  return (
    <div className="p-12 ">
      <h3 className="my-5 text-3xl text-center ">
        Don't take our word for it - see what your fellow students are saying
      </h3>
      <div className="flex flex-wrap justify-center gap-6 p-0 lg:p-9">
        {reviewData.map((obj, index) => (
          <div
            key={index}
            className="flex flex-col w-[100%] p-6 shadow-[0px_0px_65px_8px_rgba(0,_0,_0,_0.1)] border-3 rounded-2xl m-0  sm:w-[100%] lg:w-[25%] lg:m-9  ">
            <span className="text-3xl text-[#521751] mb-8 ">
              {obj?.heading}
            </span>
            <span className="border-l-4 border-[#5a00c7] px-5 py-5 italic ">
              {obj?.desc}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
