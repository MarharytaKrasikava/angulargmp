import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, Author } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root'
})
export class VideoCoursesService {
  public courses: Course[];

  constructor(private http: HttpClient) {}

  public getCourses(startCount: number, loadAmount: number): Observable<Course[]> {
    return this.http.get<Course[]>(`http://localhost:3004/courses?start=${startCount}&count=${loadAmount}`);
  }

  public createCourse(
    id: number,
    name: string,
    date: string,
    length: number,
    description: string,
    topR: boolean,
    authors: Author[]
  ): Course {
    return new Course(id, name, date, length, description, topR, authors);
  }

  public getCourse(id: number): Course {
    return this.courses.find((course) => course.id === id);
  }

  public updateCourse(
    id: number,
    name: string,
    date: string,
    length: number,
    description: string,
    topR: boolean,
    authors: Author[]
  ): void {
    const index: number = this.courses.findIndex(course => course.id === id);
    this.courses[index] = new Course(id, name, date, length, description, topR, authors);
  }

  public removeCourse(id: number): void {
    const index: number = this.courses.findIndex(course => course.id === id);
    if (index !== -1) {
      this.courses.splice(index, 1);
    }
  }
}
