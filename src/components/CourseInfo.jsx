import React from "react";
import { courseData } from "../Data/Data";
import { useParams } from "react-router-dom";

const CourseInfo = () => {
  const params = useParams();

  let courseObj = courseData?.data?.filter(
    (course) => course.slug === params.slug
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <div>
        <div className="flex flex-col items-center w-full ">
          <div className="w-1/2">
            <iframe
              height="500"
              width="500"
              src={courseObj[0]?.videoUrl}
              className="w-full py-2"></iframe>
          </div>
          <div className="flex flex-col w-1/2">
            <h2>{courseObj[0]?.headings}</h2>
            {courseObj[0]?.paras?.map((para) => (
              <p>{para}</p>
            ))}
          </div>
          <div className="w-1/2">
            <h2>{courseObj[0]?.secondHeading}</h2>
            {courseObj[0]?.about?.map((about) => (
              <ul>
                <li>{about}</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
