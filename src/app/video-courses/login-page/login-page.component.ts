import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth-service/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public loginValue: string;
  public passwordValue: string;

  constructor(private authService: AuthService, private router: Router) { }

  public authenticate(): void {
    this.authService.logIn(this.loginValue, this.passwordValue).subscribe((data: { token: string }) => {
      this.authService.token = data.token;
      if (data.token) {
        this.router.navigate(['/courses']);
      }
    });
  }

}
