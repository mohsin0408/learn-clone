const SET_CATEGORY = "SET_CATEGORY";
const SET_AUTHOR = "SET_AUTHOR";
const SET_FILTERED_COURSES = "SET_FILTERED_COURSES";
const SET_VIDEO = "SET_VIDEO";
const SET_NAME = "SET_NAME";

const initialState = {
  category: "All",
  author: "All",
  filteredCourses: [],
  videoSrcs: "null",
  name: "null",
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
    case SET_VIDEO:
      return {
        ...state,
        videoSrcs: action.payload,
      };
    case SET_NAME:
      return {
        ...state,
        name: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
