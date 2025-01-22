import { legacy_createStore } from "@reduxjs/toolkit";

const SET_CATEGORY = "SET_CATEGORY";
const SET_AUTHOR = "SET_AUTHOR";
const SET_FILTERED_COURSES = "SET_FILTERED_COURSES";

const initialState = {
  category: "All",
  author: "All",
  filteredCourses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case SET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      };
    case SET_FILTERED_COURSES:
      return {
        ...state,
        filteredCourses: action.payload,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);

export default store;

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

const filterCourses = (category, author, courseData) => {
  console.log("Course Data:", courseData);
  return (dispatch) => {
    const filteredData = courseData?.data?.filter((course) => {
      const matchCategory = category === "All" || category === course.category;
      const matchAuthor = author === "All" || author === course.tutor;
      return matchCategory && matchAuthor;
    });

    console.log("Filtered Data:", filteredData);

    dispatch(setFilteredCourses(filteredData));
  };
};

export { setCategory, setAuthor, setFilteredCourses, filterCourses };
