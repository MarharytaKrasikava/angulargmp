import { Component } from '@angular/core';
import { AuthService } from './shared/components/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'video-course-app';
  public isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggesIn;
  }
}
