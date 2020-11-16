import { UserInfo } from '../../models/userInfo.model';

export class AuthService {
  public isLoggesIn: boolean = false;

  constructor() {
    this.checkIsLoggedIn();
  }

  private checkIsLoggedIn(): void {
    const token: string = localStorage.getItem('userData');
    if (token) {
      this.isLoggesIn = true;
    }
  }

  public logIn(): void {
    localStorage.setItem('userData', JSON.stringify({ login: 'myLogin', password: 'myPassword', token: 'myToken' }));

    console.log('Logged in successfully');
  }

  public logOut(): void {
    if (localStorage.getItem('userData')) { localStorage.removeItem('userData'); }

    console.log('Logged out');
  }

  public getUserInfo(): UserInfo {
    const data: string = localStorage.getItem('userData');
    return data && JSON.parse(data);
  }
}
