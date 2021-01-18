import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components';
import { FooterComponent } from './shared/components';
import { BreadcrumbsComponent } from './shared/components';
import { SearchComponent } from './video-courses';
import { CourseComponent } from './video-courses';
import { CoursesComponent } from './video-courses';
import { VideoCoursesComponent } from './video-courses';
import { DialogComponent } from './video-courses/courses/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './video-courses/login-page/login-page.component';
import { DateHighlightDirective } from './shared/directives/date-highlight/date-highlight.directive';
import { DurationFormattingPipe } from './shared/pipes/duration-formatting/duration-formatting.pipe';
import { OrderByPipe } from './shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from './shared/pipes/filter-pipe/filter.pipe';
import { NewCourseComponent } from './video-courses/new-course/new-course.component';
import { DateInputComponent } from './video-courses/new-course/date-input/date-input.component';
import { DurationInputComponent } from './video-courses/new-course/duration-input/duration-input.component';
import { AuthorsInputComponent } from './video-courses/new-course/authors-input/authors-input.component';
import { PageNotFoundComponent } from './video-courses/page-not-found/page-not-found.component';
import { VideoCoursesService } from './shared/services/video-courses-service/video-courses.service';
import { AuthService } from './shared/services/auth-service/auth.service';
import { AuthInterceptorService } from './shared/services/auth-interceptor.service';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { appReducer } from './store/app.reducer';
import { environment } from 'src/environments/environment';
import { DateValidatorDirective } from './shared/directives/date-validator.directive';
import { NumberValidatorDirective } from './shared/directives/number-validator.directive';
import { AuthorsService } from './shared/services/authors.service';
import { AuthorComponent } from './video-courses/new-course/authors-input/author/author.component';
import { AuthorsValidatorDirective } from './shared/directives/authors-validator.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    CourseComponent,
    VideoCoursesComponent,
    DateHighlightDirective,
    DurationFormattingPipe,
    DialogComponent,
    LoginPageComponent,
    NewCourseComponent,
    DateInputComponent,
    DurationInputComponent,
    AuthorsInputComponent,
    PageNotFoundComponent,
    SpinnerComponent,
    AuthorComponent,
    DateValidatorDirective,
    NumberValidatorDirective,
    AuthorsValidatorDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
  ],
  providers: [
    OrderByPipe,
    FilterPipe,
    VideoCoursesService,
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    AuthorsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
