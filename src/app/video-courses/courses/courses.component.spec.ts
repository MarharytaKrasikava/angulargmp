import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseComponent } from './course/course.component';
import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [ CoursesComponent, CourseComponent ]
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
    expect(courseItemsHeaders.length).toBe(2);
    expect(courseItemsBodies.length).toBe(2);
  });

  it('should render all course items', () => {
    spyOn(console, 'log');
    const loadButton: HTMLButtonElement = fixture.debugElement.nativeElement.querySelector('.courses__load-more button');
    loadButton.click();
    expect(console.log).toHaveBeenCalledWith('loaded successfully');
  });
});
