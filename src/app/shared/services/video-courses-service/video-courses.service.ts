import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course, Author } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class VideoCoursesService {
  public courses: Course[];
  public loadAmount: number;

  constructor(private http: HttpClient) {}

  public getCourses(
    startCount: number,
    loadAmount: number = 3,
    filterVal: string = ''
  ): Observable<Course[]> {
    let searchParams: HttpParams = new HttpParams();
    if (startCount) {
      searchParams = searchParams.append('start', `${startCount}`);
    }
    if (loadAmount) {
      searchParams = searchParams.append('count', `${loadAmount}`);
    }
    if (filterVal) {
      searchParams = searchParams.append('textFragment', filterVal);
    }
    return this.http.get<Course[]>('http://localhost:3004/courses', {
      params: searchParams,
    });
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
    const index: number = this.courses.findIndex((course) => course.id === id);
    this.courses[index] = new Course(
      id,
      name,
      date,
      length,
      description,
      topR,
      authors
    );
  }

  public removeCourse(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3004/courses/${id}`);
  }
}
