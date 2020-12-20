import { Component, OnDestroy } from '@angular/core';
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
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnDestroy {
  private storeSubscription: Subscription;
  public loginValue: string;
  public passwordValue: string;

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) { }

  public authenticate(): void {
    this.storeSubscription =  this.store.select('auth').pipe(map((authState) => authState.userInfo))
    .subscribe((userInfo: UserInfo) => {
      if (userInfo.token) {
        this.router.navigate(['/courses']);
      }
      localStorage.setItem('authToken', userInfo.token);
    });

    this.router.navigate(['/courses']);
  }

  ngOnDestroy() {
    this.storeSubscription.unsubscribe();
  }

}
