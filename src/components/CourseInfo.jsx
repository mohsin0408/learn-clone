import React from "react";

const CourseInfo = ({ infoData, promoRef }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <div>
        <div className="flex flex-col items-center w-full " ref={promoRef}>
          <video
            width="640"
            height="360"
            controls
            className="py-2"
            src={infoData.trailer}></video>
        </div>

        <div className="flex flex-col items-center justify-center ">
          <ul className="flex flex-col gap-5 p-5 sm:w-1/2 ">
            {infoData.aboutCourse?.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <ul className="flex flex-col gap-5 p-5 sm:w-1/2 ">
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
