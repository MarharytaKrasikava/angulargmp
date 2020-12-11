import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
    this.checkIsLoggedIn();
  }

  public checkIsLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  public logIn(login: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      'http://localhost:3004/auth/login',
      {
        login,
        password,
      }
    );
  }

  public logOut(): void {
    if (localStorage.getItem('authToken')) {
      localStorage.removeItem('authToken');
    }
  }

  public getUserInfo(): Observable<UserInfo> {
    return this.http.post<UserInfo>('http://localhost:3004/auth/userinfo', {
      token: localStorage.getItem('authToken'),
    });
  }
}
