import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Author } from '../models';
// import * as AuthorsActions from '../../video-courses/new-course/authors-input/store/authors.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  constructor(private http: HttpClient, private store: Store) {}

  public getAuthors(): Observable<Author[]> {
    return this.http.get<Author[]>(`http://localhost:3004/authors`);
  }
}
