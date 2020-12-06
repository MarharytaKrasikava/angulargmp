import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public isLoggesIn: boolean = false;
  // public userInfo: UserInfo;

  constructor(private http: HttpClient) {
    this.checkIsLoggedIn();
  }

  private checkIsLoggedIn(): void {
    const token: string = localStorage.getItem('userData');
    if (token) {
      this.isLoggesIn = true;
    }
  }

  public logIn(): void {
    /* this.http.post('http://localhost:3004/auth/login', {
      login: 'myLogin',
      password: 'myPassword' }).subscribe((data: { token: string }) => {
        localStorage.setItem(
          'authToken',
          data.token,
        );
        this.isLoggesIn = true;
      }); */
      localStorage.setItem(
        'userData',
        JSON.stringify({
          login: 'myLogin',
          password: 'myPassword',
          token: 'myToken',
        })
      );

      this.isLoggesIn = true;
  }

  public logOut(): void {
    if (localStorage.getItem('userData')) {
      localStorage.removeItem('userData');
    }

    this.isLoggesIn = false;
  }

  public getUserInfo(): UserInfo {
    /* const token: string = localStorage.getItem('authToken');
    this.http.post('http://localhost:3004/auth/login', { token }).subscribe((data: UserInfo) => {
      this.userInfo = data;
      console.log(data);
    }); */
    const data: string = localStorage.getItem('userData');
    return data && JSON.parse(data);
  }
}
