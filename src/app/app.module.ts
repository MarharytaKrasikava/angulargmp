import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components';
import { FooterComponent } from './shared/components';
import { BreadcrumbsComponent } from './shared/components';
import { SearchComponent } from './video-courses';
import { CourseComponent } from './video-courses';
import { CoursesComponent } from './video-courses';
import { VideoCoursesComponent } from './video-courses';
import { DateHighlightDirective } from './shared/directives/date-highlight/date-highlight.directive';
import { DurationFormattingPipe } from './shared/pipes/duration-formatting/duration-formatting.pipe';
import { OrderByPipe } from './shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from './shared/pipes/filter-pipe/filter.pipe';

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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FontAwesomeModule],
  providers: [OrderByPipe, FilterPipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
