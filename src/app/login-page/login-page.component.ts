import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/components/auth-service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginValue: string;
  public passwordValue: string;

  constructor(private authService: AuthService) { }

  public authenticate(): void {
    this.authService.logIn();
  }

}
