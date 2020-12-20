import { Action } from '@ngrx/store';
import { Course } from '../../../shared/models';

export const SET_COURSES = 'SET_COURSES';
export const ADD_COURSE = 'ADD_COURSE';
export const EDIT_COURSE = 'EDIT_COURSE';

export class SetCourses implements Action {
  public readonly type = SET_COURSES;

  constructor(public payload: Course[]) {}
}

export class AddCourse implements Action {
  public readonly type = ADD_COURSE;

  constructor(public payload: Course) {}
}

export class EditCourse implements Action {
  public readonly type = EDIT_COURSE;

  constructor(public payload: Course) {}
}

export type CoursesActions = SetCourses | AddCourse | EditCourse;
