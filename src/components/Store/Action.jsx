const SET_CATEGORY = "SET_CATEGORY";
const SET_AUTHOR = "SET_AUTHOR";
const SET_FILTERED_COURSES = "SET_FILTERED_COURSES";
const SET_VIDEO = "SET_VIDEO";
const SET_NAME = "SET_NAME";

const setCategory = (category) => {
  return {
    type: SET_CATEGORY,
    payload: category,
  };
};

const setAuthor = (author) => {
  return {
    type: SET_AUTHOR,
    payload: author,
  };
};

const setFilteredCourses = (filteredCourses) => {
  return {
    type: SET_FILTERED_COURSES,
    payload: filteredCourses,
  };
};

const setVideoSrcs = (videoSrcs) => {
  return {
    type: SET_VIDEO,
    payload: videoSrcs,
  };
};

const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

const filterCourses = (category, author, courseData, searchQuery = "") => {
  return (dispatch) => {
    const filteredData = courseData?.filter((course) => {
      const matchCategory = category === "All" || course.category === category;
      const matchAuthor = author === "All" || course.tutor === author;

      const matchSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.tutor.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());

      return matchCategory && matchAuthor && matchSearch;
    });

    dispatch(setFilteredCourses(filteredData));
  };
};

export {
  setCategory,
  setAuthor,
  setFilteredCourses,
  filterCourses,
  setVideoSrcs,
  setName,
};
