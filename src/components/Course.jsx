import React from "react";
import { Link } from "react-router-dom";

const Course = () => {
  const courseData = {
    heading: "Courses Included with Purchase",
    data: [
      {
        id: "1",
        img: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://www.filepicker.io/api/file/TWqzpMxDQ62UQUwxsGAA",
        title: "AI For Developers With GitHub Copilot, Cursor AI & ChatGPT",
        desc: "Leverage AI to boost your productivity as a developer: Use GitHub Copilot, Cursor AI and ChatGPT for efficient coding",
        tutor: "Maximilian Schwarzmüller",
        price: "$69",
      },
      {
        id: "2",
        img: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/3GR2BjYPSwiRudTdf2lw",
        title: "ChatGPT - The Complete Guide",
        desc: "10x your productivity by using ChatGPT & OpenAI APIs efficiently. Includes prompt templates & hands-on examples.",
        tutor: "Maximilian Schwarzmüller",
        price: "$69",
      },
      {
        id: "3",
        img: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/Pv1eJVW9SvOP22Raj8L3",
        title: "Go - The Complete Guide",
        desc: "Learn Go from the ground up & in great depth by building multiple demo projects, incl. a REST API",
        tutor: "Maximilian Schwarzmüller",
        price: "$69",
      },
      {
        id: "4",
        img: "https://process.fs.teachablecdn.com/ADNupMnWyR7kCWRvm76Laz/resize=width:705/https://cdn.filestackcontent.com/ccLoMCzLSLSH11Oqvh0u",
        title: "JavaScript Algorithms - The Fundamentals",
        desc: "Learn all the core basics and fundamentals about JavaScript algorithms, dive into tons of examples and get a plan for building and measuring algorithms.",
        tutor: "Maximilian Schwarzmüller",
        price: "$69",
      },
    ],
  };
  return (
    <>
      <h3 className="text-center">{courseData?.heading}</h3>
      <div className="flex items-center justify-center">
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-4 md:grid-cols-2 ">
          {courseData?.data.map((obj, index) => (
            <div
              key={index}
              className=" w-[300px] h-full flex flex-col bg-[#f7f7f7] shadow-[0px_1px_#d4baf3] 
            border border-[#d4baf3] rounded-[9px] overflow-hidden cursor-pointer lg:w-[380px] hover:border-[#9d5ee8] hover:border-2 ">
              <Link to="/Curriculum">
                <img src={obj.img} className="object-cover " />
                <div className="flex flex-col justify-between h-full gap-10 px-4 py-5">
                  <div>
                    <span className=" text-[#5A00C7] text-lg font-bold ">
                      {obj?.title}
                    </span>
                    <p className="text-sm line-clamp-2">{obj?.desc}</p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <p>{obj?.tutor}</p>
                    <p className="text-[#5a05c2] text-sm font-bold ">
                      {obj?.price}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
