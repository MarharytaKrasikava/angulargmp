import { Course } from '../../../shared/models';
import * as CoursesActions from './courses.actions';

export interface State {
  courses: Course[];
}

const initialState: State = {
  courses: [],
};

export function coursesReducer(
  state = initialState,
  action: CoursesActions.CoursesActions
) {
  switch (action.type) {
    case CoursesActions.SET_COURSES:
      return {
        ...state,
        courses: [...action.payload],
      };

    case CoursesActions.ADD_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    case CoursesActions.EDIT_COURSE:
      const newCourses = state.courses.slice(0);
      newCourses.splice(
        state.courses.findIndex((course) => course.id === action.payload.id),
        1,
        action.payload
      );
      return {
        ...state,
        courses: newCourses,
      };
    default:
      return state;
  }
}
