import { Component, OnChanges, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../shared/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  addCourseIcon = faPlus;

  constructor() {}

  ngOnInit(): void {
    this.courses = [
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
  }

  loadCourses(): void {
    console.log('loaded successfully');
  }

  onCourseDeleted(event): void {
    console.log(event);
  }
}
