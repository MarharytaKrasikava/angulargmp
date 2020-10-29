import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseComponent } from './course.component';

import { Course } from '../../../shared/models';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [CourseComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = new Course(
      '1',
      'Test Name',
      new Date('2020-08-09'),
      45,
      'test description'
    );
    fixture.detectChanges();
    courseHtml = fixture.debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course header correctly', () => {
    expect(courseHtml.querySelector('h1').textContent).toBe(
      `Video Course ${component.course.id}: ${component.course.title}`
    );
  });

  it('should render course duration correctly', () => {
    expect(
      courseHtml.querySelector('.course__header__detail').firstChild
        .textContent
    ).toBe(`${component.course.duration} min`);
  });

  it('should render course duration correctly', () => {
    expect(
      courseHtml.querySelector('.course__header__detail div+div').textContent
    ).toBe(component.course.creationDate.toDateString());
  });

  it('should render course duration correctly', () => {
    expect(
      courseHtml.querySelector('.course__body__description').textContent
    ).toBe(component.course.description);
  });

  it('should emit correct id', () => {
    let selectedId: string;
    component.courseDeleted.subscribe((id: string) => {
      selectedId = id;
    });
    const deleteButton: HTMLButtonElement = courseHtml.querySelector('.blue-button');
    deleteButton.click();
    expect(selectedId).toBe(component.course.id);
  });
});
