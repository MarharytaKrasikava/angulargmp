import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
  BreadcrumbsComponent,
  FooterComponent,
  HeaderComponent,
} from '../shared/components';
import { CourseComponent } from './courses/course/course.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './search/search.component';

import { DurationFormattingPipe } from '../shared/pipes/duration-formatting/duration-formatting.pipe';

import { VideoCoursesComponent } from './video-courses.component';
import { OrderByPipe } from '../shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from '../shared/pipes/filter-pipe/filter.pipe';

describe('VideoCoursesComponent', () => {
  let component: VideoCoursesComponent;
  let fixture: ComponentFixture<VideoCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule, FormsModule],
      declarations: [
        VideoCoursesComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        SearchComponent,
        CoursesComponent,
        CourseComponent,
        FooterComponent,
        DurationFormattingPipe,
      ],
      providers: [OrderByPipe, FilterPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
