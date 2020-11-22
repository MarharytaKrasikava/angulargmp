import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../shared/models';

import { VideoCoursesService } from '../video-courses-service/video-courses.service';
import { OrderByPipe } from 'src/app/shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit, OnChanges {
  public courses: Course[] = [];
  public addCourseIcon: IconDefinition = faPlus;
  @Input() public filterValue: string = '';

  constructor(
    private orderBy: OrderByPipe,
    private filter: FilterPipe,
    private coursesService: VideoCoursesService,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.courses = this.orderBy.transform(this.coursesService.getCourses());
  }

  public ngOnChanges(): void {
    this.courses = this.filter.transform(this.courses, this.filterValue);
  }

  public loadCourses(): void {
    console.log('loaded successfully');
  }

  public onCourseDeleted(id: string): void {
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.coursesService.removeCourse(id);
    });
  }
}
