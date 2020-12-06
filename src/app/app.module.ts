import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';

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
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [OrderByPipe, FilterPipe, VideoCoursesService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
