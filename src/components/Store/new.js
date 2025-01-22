// import { createStore } from 'redux';

// const initialState = {
//   user: {email: '', loggedIn: false,},
//   courses: {allCourses: [],  filteredCourses: [],  selectedCategory: 'All', selectedAuthor: 'All',},
// };

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     // User actions
//     case 'USER_LOGIN':
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           email: action.payload.email,
//           loggedIn: true,
//         },
//       };
//     case 'USER_LOGOUT':
//       return {
//         ...state,
//         user: {
//           ...state.user,
//           email: '',
//           loggedIn: false,
//         },
//       };

//     // Courses actions
//     case 'SET_COURSES':
//       return {
//         ...state,
//         courses: {
//           ...state.courses,
//           allCourses: action.payload,
//           filteredCourses: action.payload,
//         },
//       };
//     case 'FILTER_COURSES_BY_CATEGORY':
//       return {
//         ...state,
//         courses: {
//           ...state.courses,
//           selectedCategory: action.payload,
//           filteredCourses: state.courses.allCourses.filter(course =>
//             action.payload === 'All' ? true : course.category === action.payload
//           ),
//         },
//       };
//     case 'FILTER_COURSES_BY_AUTHOR':
//       return {
//         ...state,
//         courses: {
//           ...state.courses,
//           selectedAuthor: action.payload,
//           filteredCourses: state.courses.allCourses.filter(course =>
//             action.payload === 'All' ? true : course.tutor === action.payload
//           ),
//         },
//       };

//     default:
//       return state;
//   }
// };

// const store = createStore(rootReducer);

// export const userLogin = (email) => ({
//   type: 'USER_LOGIN',
//   payload: {email},
// });
// export const userLogout = () => ({
//   type: 'USER_LOGOUT',
// });

// export const setCourses = (courses) => ({
//   type: 'SET_COURSES',
//   payload: courses,
// });
// export const filterCoursesByCategory = (category) => ({
//   type: 'FILTER_COURSES_BY_CATEGORY',
//   payload: category,
// });
// export const filterCoursesByAuthor = (author) => ({
//   type: 'FILTER_COURSES_BY_AUTHOR',
//   payload: author,
// });

// export default store;
