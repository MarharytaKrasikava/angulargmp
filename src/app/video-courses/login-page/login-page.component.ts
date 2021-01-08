import { Component, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserInfo } from 'src/app/shared/models/userInfo.model';

import { AuthService } from 'src/app/shared/services/auth-service/auth.service';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnDestroy {
  private storeSubscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  public onLogin(form: NgForm): void {
    this.authService.logIn(form.value.login, form.value.password);
    this.storeSubscription = this.store
      .select('auth')
      .pipe(map((authState) => authState.userInfo))
      .subscribe((userInfo: UserInfo) => {
        if (userInfo?.fakeToken) {
          localStorage.setItem('authToken', userInfo.fakeToken);
          this.router.navigate(['/courses']);
        }
      });

    this.router.navigate(['/courses']);
  }

  public ngOnDestroy(): void {
    this.storeSubscription?.unsubscribe();
  }
}
