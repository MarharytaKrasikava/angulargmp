import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../shared/models';

import { VideoCoursesService } from '../../shared/services/video-courses-service/video-courses.service';
import { OrderByPipe } from 'src/app/shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';
import { DialogComponent } from './dialog/dialog.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit, OnChanges {
  // private loadAmount: number = 3;

  public courses: Course[] = [];
  public addCourseIcon: IconDefinition = faPlus;
  @Input() public filterValue: string = '';

  constructor(
    private orderBy: OrderByPipe,
    private filter: FilterPipe,
    private coursesService: VideoCoursesService,
    public dialog: MatDialog
  ) {}

  private receiveCourses(): void {
    this.coursesService.getCourses(0, this.coursesService.loadAmount).subscribe((data: Course[]) => {
      if (data) {
        this.courses = data;
      }
    });
  }

  public ngOnInit(): void {
    this.receiveCourses();
    this.courses = this.orderBy.transform(this.courses);
  }

  public ngOnChanges(): void {
    this.filter.transform(this.filterValue).subscribe((response: Course[]) => {
      this.courses = response;
    });
  }

  public loadCourses(): void {
    this.coursesService.loadAmount += 3;
    this.receiveCourses();
  }

  public onCourseDeleted(id: number): void {
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(DialogComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(() => {
      this.coursesService.removeCourse(id).subscribe();
      this.coursesService.getCourses(0, this.coursesService.loadAmount).subscribe((response: Course[]) => {
        this.courses = this.orderBy.transform(response);
      });
    });

  }
}
