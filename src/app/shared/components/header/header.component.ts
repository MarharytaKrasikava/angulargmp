import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import {
  faSignOutAlt,
  faUser,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';
import { AuthService } from '../../../shared/services/auth-service/auth.service';
import { UserInfo } from '../../models/userInfo.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private storeSubscription: Subscription;
  public logoIcon: IconDefinition = faPlayCircle;
  public userIcon: IconDefinition = faUser;
  public logOffIcon: IconDefinition = faSignOutAlt;

  public isAuthenticated: boolean = false;
  public userName: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  public ngOnInit(): void {
    this.isAuthenticated = this.authService.checkIsLoggedIn();
    if (this.isAuthenticated) {
      this.storeSubscription = this.store
        .select('auth')
        .pipe(map((authState) => authState.userInfo))
        .subscribe((userInfo: UserInfo) => {
          this.userName = userInfo.login;
        });
    }
  }

  public logOut(): void {
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }
}
