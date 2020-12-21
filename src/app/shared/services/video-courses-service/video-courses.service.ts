import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import { Course, Author } from 'src/app/shared/models';
import * as CoursesActions from '../../../video-courses/courses/store/courses.actions';

@Injectable({
  providedIn: 'root',
})
export class VideoCoursesService {
  public courses: Course[];
  public loadAmount: number = 3;
  public searchValue = new Subject<string>();

  constructor(private http: HttpClient, private store: Store) {}

  public getCourses(
    startCount: number = 0,
    loadAmount: number = 3,
    filterVal: string = ''
  ): void {
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
    this.http.get<Course[]>('http://localhost:3004/courses', {
      params: searchParams,
    }).subscribe((data: Course[]) => {
      if (data) {
        this.store.dispatch(new CoursesActions.SetCourses(data));
      }
    });
  }

  public createCourse(
    id: number,
    name: string,
    date: string,
    length: number,
    authors: Author,
    topR: boolean,
  ): Observable<any> {
    return this.http.post<any>(`http://localhost:3004/courses`, {
      id,
      name,
      date,
      length,
      authors,
      topR,
    });
  }

  public getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`http://localhost:3004/courses/${id}`);
  }

  public updateCourse(
    id: number,
    name: string,
    date: string,
    length: number,
    authors: Author,
    topR: boolean,
  ): Observable<any> {
    return this.http.patch<any>(`http://localhost:3004/courses/${id}`, {
      id,
      name,
      date,
      length,
      authors,
      topR,
    });
  }

  public removeCourse(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3004/courses/${id}`);
  }
}
