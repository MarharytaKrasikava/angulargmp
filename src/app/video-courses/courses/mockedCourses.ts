import { Course } from '../../shared/models';

export const mockedCourses: Course[] = [
  new Course(
    '1',
    'Name tag',
    new Date('2020-08-09'),
    45,
    `Learn about where you can find course description, what
      information they include, how they work, and details about various
      components of a course description. Course description report information
       about a university or college's classes. They're published both in course
        catalogs that outline degree requirements and in course schedules that
         contain descriptions for all courses offered during`
  ),
  new Course(
    '2',
    'Name tag',
    new Date('2020-10-25'),
    60,
    `Learn about where you can find course description, what
   information they include, how they work, and details about various
   components of a course description. Course description report information
    about a university or college's classes. They're published both in course
     catalogs that outline degree requirements and in course schedules that
      contain descriptions for all courses offered during`
  ),
];
