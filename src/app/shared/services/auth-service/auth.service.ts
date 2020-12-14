import { Injectable } from '@angular/core';
import { UserInfo } from '../../models/userInfo.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public checkIsLoggedIn(): boolean {
    return !!localStorage.getItem('userData');
  }

  public logIn(): void {
    localStorage.setItem(
      'userData',
      JSON.stringify({
        login: 'myLogin',
        password: 'myPassword',
        token: 'myToken',
      })
    );

    console.log('Logged in successfully');
  }

  public logOut(): void {
    if (localStorage.getItem('userData')) {
      localStorage.removeItem('userData');
    }
  }

  public getUserInfo(): UserInfo {
    const data: string = localStorage.getItem('userData');
    return data && JSON.parse(data);
  }
}
