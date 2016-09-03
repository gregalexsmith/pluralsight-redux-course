import * as types from './actionTypes';
import courseApi from '../api/mockCourseApi';

export function loadCoursesSuccess(courses) {
  return {
    type: types.LOAD_COURSES_SUCCESS,
    courses : courses
  };
}

export function updateCourseSuccess(course) {
  return {type: types.UPDATE_COURSES_SUCCESS, course: course};
}

export function saveCourseSuccess(course) {
  return {type: types.CREATE_COURSES_SUCCESS, course};
}

export function loadCourses() {
  return function(dispatch) {
    return courseApi.getAllCourses().then( courses => {
      dispatch(loadCoursesSuccess(courses));
    }).catch(error => {
      throw(error);
    });
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {   //getState is usefull if you need other pieces of data from the state for this request
    return courseApi.saveCourse(course).then( savedCourse => {
      if(course.id) {
        dispatch(updateCourseSuccess(savedCourse));
      } else {
        dispatch(saveCourseSuccess(savedCourse));
      }
    }).catch(error => {
      throw(error);
    });
  };
}
