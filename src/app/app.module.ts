import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components';
import { FooterComponent } from './shared/components';
import { BreadcrumbsComponent } from './shared/components';
import { SearchComponent } from './video-courses';
import { CourseComponent } from './video-courses';
import { CoursesComponent } from './video-courses';
import { VideoCoursesComponent } from './video-courses';
import { DateHighlightDirective } from './video-courses/courses/course/date-highlight/date-highlight.directive';
import { DurationFormattingPipe } from './video-courses/courses/course/duration-formatting/duration-formatting.pipe';
import { OrderByPipe } from './video-courses/courses/order-by/order-by.pipe';
import { FilterPipe } from './video-courses/search/filter-pipe/filter.pipe';
import { VideoCoursesService } from './video-courses/video-courses-service/video-courses.service';
import { DialogComponent } from './video-courses/courses/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    DialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [OrderByPipe, FilterPipe, VideoCoursesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
