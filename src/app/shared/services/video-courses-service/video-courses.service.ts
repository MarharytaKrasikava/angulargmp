import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Course, Author } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class VideoCoursesService {
  public courses: Course[];
  public loadAmount: number = 3;
  public searchValue = new Subject<string>();

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
