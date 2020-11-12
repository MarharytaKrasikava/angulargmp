import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FilterPipe } from '../search/filter-pipe/filter.pipe';

import { CourseComponent } from './course/course.component';
import { DurationFormattingPipe } from './course/duration-formatting/duration-formatting.pipe';
import { CoursesComponent } from './courses.component';
import { mockedCourses } from '../video-courses-service/mockedCourses';
import { OrderByPipe } from './order-by/order-by.pipe';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ CoursesComponent, CourseComponent, DurationFormattingPipe ],
      providers: [OrderByPipe, FilterPipe],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render all course items', () => {
    const courseItemsHeaders: HTMLCollection = fixture.debugElement.nativeElement.querySelectorAll('.course__header');
    const courseItemsBodies: HTMLCollection = fixture.debugElement.nativeElement.querySelectorAll('.course__body');
    expect(courseItemsHeaders.length).toBe(mockedCourses.length);
    expect(courseItemsBodies.length).toBe(mockedCourses.length);
  });

  it('should render all course items', () => {
    spyOn(console, 'log');
    const loadButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.courses__load-more button');
    loadButton.click();
    expect(console.log).toHaveBeenCalledWith('loaded successfully');
  });
});
