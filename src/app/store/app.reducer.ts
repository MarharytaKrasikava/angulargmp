import { ActionReducerMap } from '@ngrx/store';
import * as CoursesReducer from '../video-courses/courses/store/courses.reducer';
import * as AuthReducer from '../video-courses/login-page/store/auth.reducer';
import * as AuthorReducer from '../video-courses/new-course/authors-input/store/authors.reducer';

export interface AppState {
  courses: CoursesReducer.State;
  auth: AuthReducer.State;
  authors: AuthorReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  courses: CoursesReducer.coursesReducer,
  auth: AuthReducer.authReducer,
  authors: AuthorReducer.authorsReducer,
};
