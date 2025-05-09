import React from "react";

const Instructor = ({ instructorData }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col gap-4 p-6 sm:w-[50%] w-[100%]">
        <h2>Your Instructor</h2>
        <div className="flex gap-2 ">
          <img
            className=" rounded-[50%] w-[170px]  "
            src={instructorData?.tutorImage}
          />
          <h2>{instructorData?.tutor}</h2>
        </div>
        <div>
          {instructorData?.tutorCourseReviewData?.map((item) => (
            <div key={item._id}>
              <p className="text-lg font-extralight ">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructor;
