import { Component, OnInit } from '@angular/core';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../auth-service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public logoIcon: IconDefinition = faPlayCircle;
  public userIcon: IconDefinition = faUser;
  public logOffIcon: IconDefinition = faSignOutAlt;

  public isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.isLoggesIn;
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
