import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';
import { OrderByPipe } from 'src/app/shared/pipes/order-by/order-by.pipe';

import { mockedCourses } from './mockedCourses';
import { Course } from '../../shared/models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit, OnChanges {
  public courses: Course[] = [];
  public addCourseIcon: IconDefinition = faPlus;
  @Input() public filterValue: string = '';

  constructor(private orderBy: OrderByPipe, private filter: FilterPipe) {}

  public ngOnInit(): void {
    this.courses = this.orderBy.transform(mockedCourses);
  }

  public ngOnChanges(): void {
    this.courses = this.filter.transform(mockedCourses, this.filterValue);
  }

  public loadCourses(): void {
    console.log('loaded successfully');
  }

  public onCourseDeleted(event: string): void {
    console.log(event);
  }
}
