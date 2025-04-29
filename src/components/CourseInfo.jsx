import React from "react";

const CourseInfo = ({ infoData }) => {
  console.log(infoData, "info");

  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <div>
        <div className="flex flex-col items-center w-full ">
          <iframe
            height="500"
            width="500"
            src={infoData?.course?.trailer}
            className="w-full py-2"></iframe>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <ul className="flex flex-col w-1/2 gap-5 ">
            {infoData?.course?.aboutCourse?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-col w-1/2 gap-5 ">
            {infoData?.course?.courseContent?.map((item, index) => {
              return (
                <div key={index}>
                  <li>{item?.topic}</li>
                  <li>{item?.about}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
