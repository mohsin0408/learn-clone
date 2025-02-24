import React from "react";

const Goals = () => {
  const goalsData = {
    heading: "YOUR LEARNING EXPERIENCE",
    secondHeading: "30 DAYS MONEY BACK GUARANTEE",
    desc: "You got the goal, we got the tools",
    secondDesc:
      "Achieve your goals with our top-quality courses or get a full refund if you're not happy with the membership. No questions asked within 30 days!",
    singleImg: "https://www.filepicker.io/api/file/q3KvpMMTkubdjMWhTvLT",
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
      <div className="bg-[#3c374b] py-12 ">
        <h2 className="text-3xl font-semibold text-center lg:text-4xl text-[#FFC675] ">
          {goalsData.heading}
        </h2>
        <p className="text-lg text-center font-extralight text-[#FFE7A3] ">
          {goalsData.desc}
        </p>
        <div className="grid items-center justify-center grid-cols-1 gap-5 p-5 lg:grid-cols-3">
          {goalsData.goalImg.map((img, index) => (
            <span
              key={index}
              className="flex flex-col items-center justify-center gap-5">
              <img src={img.img} alt="goal" className="w-20 h-20" />
              <p className="text-[#FFE7A3]">{img.info}</p>
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-5">
        <img
          src={goalsData.singleImg}
          alt="goal"
          className="object-cover w-[200px] h-[200px]  "
        />
        <h2 className="text-3xl font-semibold text-center lg:text-xl ">
          {goalsData.secondHeading}
        </h2>
        <p className="text-lg text-center font-extralight ">
          {goalsData.secondDesc}
        </p>
      </div>
    </div>
  );
};

export default Goals;
