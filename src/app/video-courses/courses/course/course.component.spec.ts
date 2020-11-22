import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CourseComponent } from './course.component';

import { Course } from '../../../shared/models';
import { Component } from '@angular/core';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
  let courseHtml: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [CourseComponent, TestCoursesComponent],
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
    expect(courseHtml.querySelector('.course__header__title').textContent).toBe(
      `Video Course ${component.course.id}: ${component.course.title}`
    );
  });

  it('should render course duration correctly', () => {
    expect(
      courseHtml.querySelector('.course__header__detail').firstChild.textContent
    ).toBe(`${component.course.duration} min`);
  });

  it('should render course date correctly', () => {
    expect(
      courseHtml.querySelector('.course__header__detail div+div').textContent
    ).toBe(component.course.creationDate.toDateString());
  });

  it('should render course description correctly', () => {
    expect(
      courseHtml.querySelector('.course__body__description').textContent
    ).toBe(component.course.description);
  });

  it('should emit correct id', () => {
    let selectedId: string;
    component.courseDeleted.subscribe((id: string) => {
      selectedId = id;
    });
    const deleteButton: HTMLButtonElement = courseHtml.querySelector(
      '.blue-button'
    );
    deleteButton.click();
    expect(selectedId).toBe(component.course.id);
  });
});

@Component({
  template: `<app-course
    [course]="courseItem"
    (courseDeleted)="onCourseDeleted($event)"
  ></app-course>`,
})
export class TestCoursesComponent {
  public courseItem: Course = new Course(
    '5',
    'Name tag',
    new Date('2020-08-09'),
    45,
    `Test Description`
  );

  public onCourseDeleted(event: string): void {
    console.log(event);
  }
}

describe('CourseComponent in Host Component', () => {

  let hostComponent: TestCoursesComponent;
  let fixture: ComponentFixture<TestCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseComponent, TestCoursesComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCoursesComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create host component', () => {
    expect(hostComponent).toBeTruthy();
  });

  it('should hangle delete event correctly', () => {
    spyOn(console, 'log');
    const deleteButton: HTMLButtonElement = fixture.nativeElement.querySelector('.blue-button');
    deleteButton.click();

    expect(console.log).toHaveBeenCalledWith('5');
  });
});

describe('CourseComponent as a class', () => {

  it('should render course header correctly', () => {
    spyOn(console, 'log');
    const courseClass: CourseComponent = new CourseComponent();

    expect(console.log).toHaveBeenCalledWith('constructor called');

    courseClass.ngOnInit();

    expect(console.log).toHaveBeenCalledWith('initiolized');
  });
});
