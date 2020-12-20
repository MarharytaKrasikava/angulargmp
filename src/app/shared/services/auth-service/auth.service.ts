import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as AuthActions from '../../../video-courses/login-page/store/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private store: Store<AppState>) { }

  public checkIsLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  public logIn(login: string, password: string): void {
    this.http.post<{ token: string }>(
      'http://localhost:3004/auth/login',
      {
        login,
        password,
      }
    ).subscribe((data: { token: string }) => {
      if (data.token) {
        this.getUserInfo().subscribe(userInfo => {
          this.store.dispatch(new AuthActions.Login(userInfo));
        })
        localStorage.setItem('authToken', data.token);
      }
    });
  }

  public logOut(): void {
    if (localStorage.getItem('authToken')) {
      this.store.dispatch(new AuthActions.Logout());
      localStorage.removeItem('authToken');
    }
  }

  public getUserInfo(): Observable<UserInfo> {
    return this.http.post<UserInfo>('http://localhost:3004/auth/userinfo', {
      token: localStorage.getItem('authToken'),
    });
  }
}
