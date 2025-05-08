import React from "react";

const CourseInfo = ({ infoData }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <div>
        <div className="flex flex-col items-center w-full ">
          <video
            width="640"
            height="360"
            controls
            className="py-2"
            src={infoData.trailer}></video>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <ul className="flex flex-col w-1/2 gap-5 ">
            {infoData.aboutCourse?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-col w-1/2 gap-5 ">
            {infoData?.courseContent?.map((item, index) => {
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
