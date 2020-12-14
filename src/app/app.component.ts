import { Component } from '@angular/core';
import { AuthService } from './shared/services/auth-service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'video-course-app';
}
