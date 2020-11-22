import { Injectable } from '@angular/core';
import { Course } from 'src/app/shared/models';
import { mockedCourses } from './mockedCourses';

@Injectable({
  providedIn: 'root'
})
export class VideoCoursesService {
  private courses: Course[] = mockedCourses;

  public getCourses(): Course[] {
    return this.courses.slice();
  }

  public createCourse(
    id: string,
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    topR: boolean
  ): Course {
    return new Course(id, title, creationDate, duration, description, topR);
  }

  public getCourse(id: string): Course {
    return this.courses.find((course) => course.id === id);
  }

  public updateCourse(
    id: string,
    title: string,
    creationDate: Date,
    duration: number,
    description: string,
    topR: boolean
  ): void {
    const index: number = this.courses.findIndex(course => course.id === id);
    this.courses[index] = new Course(id, title, creationDate, duration, description, topR);
  }

  public removeCourse(id: string): void {
    const index: number = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}
