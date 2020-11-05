import { Component, OnInit } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../../shared/models';

import { mockedCourses } from './mockedCourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit {
  public courses: Course[] = [];
  public addCourseIcon: IconDefinition = faPlus;

  public ngOnInit(): void {
    this.courses = mockedCourses;
  }

  public loadCourses(): void {
    console.log('loaded successfully');
  }

  public onCourseDeleted(event: string): void {
    console.log(event);
  }
}
