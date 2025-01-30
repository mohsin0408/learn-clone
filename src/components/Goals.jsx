import React from "react";

const Goals = () => {
  const goalsData = {
    heading: "YOUR LEARNING EXPERIENCE",
    desc: "You got the goal, we got the tools",
    goalImg: [
      {
        img: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/courses-icon_u9emvz",
        info: "50 Courses Included",
      },
      {
        img: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/hours-content-icon_dyye62",
        info: "> 700+ Hours of HD Video Content",
      },
      {
        img: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/qa-icon_fzkput",
        info: "Fast & Friendly Q&A Support",
      },
      {
        img: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/worldwide-students-icon_bni0jb",
        info: "> 3,000,000 Students Worldwide",
      },
      {
        img: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/updated-icon_zfausy",
        info: "Up-to-Date Courses",
      },
      {
        img: "https://res.cloudinary.com/academind-gmbh/image/upload/f_auto,q_80/v1606912139/academind.com/site/new-courses-icon_a6gwgy",
        info: "New Courses Added Regularly",
      },
    ],
  };
  return (
    <div>
      <h2 className="text-3xl font-semibold text-center lg:text-4xl ">
        {goalsData.heading}
      </h2>
      <p className="text-lg text-center font-extralight ">{goalsData.desc}</p>
      <div className="grid items-center justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-3">
        {goalsData.goalImg.map((img, index) => (
          <span
            key={index}
            className="flex flex-col items-center justify-center gap-5">
            <img src={img.img} alt="goal" className="w-20 h-20" />
            <p>{img.info}</p>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Goals;
