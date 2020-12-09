import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token: string;
  public userInfo: UserInfo;

  constructor(private http: HttpClient) {
    this.checkIsLoggedIn();
  }

  public checkIsLoggedIn(): boolean {
    return !!this.token;
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
    this.token = undefined;
  }

  public getUserInfo(): Observable<UserInfo> {
    return this.http.post<UserInfo>('http://localhost:3004/auth/userinfo', {
      token: this.token,
    });
  }
}
