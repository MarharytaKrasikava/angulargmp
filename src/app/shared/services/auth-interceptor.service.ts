import {
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth-service/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (request.url !== 'http://localhost:3004/auth/login') {
      const tockenedRequest: HttpRequest<any> = request.clone({
        headers: request.headers.append('Authorization', this.authService.token),
      });
      return next.handle(tockenedRequest);
    }
    return next.handle(request);
  }
}
