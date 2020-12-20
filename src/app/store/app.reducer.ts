import { ActionReducerMap } from '@ngrx/store';
import * as CoursesReducer from '../video-courses/courses/store/courses.reducer';
import * as AuthReducer from '../video-courses/login-page/store/auth.reducer';

export interface AppState {
  courses: CoursesReducer.State;
  auth: AuthReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  courses: CoursesReducer.coursesReducer,
  auth: AuthReducer.authReducer,
}
