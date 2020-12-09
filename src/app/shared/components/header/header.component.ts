import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignOutAlt, faUser, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../shared/services/auth-service/auth.service';
import { UserInfo } from '../../models/userInfo.model';

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
  public userName: string;

  constructor(private authService: AuthService, private router: Router) { }

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.checkIsLoggedIn();
    if (this.isAuthenticated) {
      this.authService.getUserInfo().subscribe((data: UserInfo) => {
        this.userName = data.login;
        this.authService.userInfo = data;
        console.log(data);
      });
    }
  }

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }
}
