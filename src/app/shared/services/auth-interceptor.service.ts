import {
  HttpEvent,
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthService } from './auth-service/auth.service';
import { SpinnerService } from './spinner.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private spinnerService: SpinnerService
  ) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url !== 'http://localhost:3004/auth/login') {
      const tockenedRequest: HttpRequest<any> = request.clone({
        headers: request.headers.append(
          'Authorization',
          localStorage.getItem('authToken')
        ),
      });
      this.spinnerService.show.next(true);
      return next.handle(tockenedRequest).pipe(
        tap((event) => {
          if (event.type === HttpEventType.Response) {
            this.spinnerService.show.next(false);
          }
        }), catchError(() => {
          this.spinnerService.show.next(false);
          return throwError('You are not authorized!');
        })
      );
    }
    return next.handle(request);
  }
}
