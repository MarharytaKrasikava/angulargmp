import {
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { faPlus, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../shared/models';
import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { debounce, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { VideoCoursesService } from '../../shared/services/video-courses-service/video-courses.service';
import { OrderByPipe } from 'src/app/shared/pipes/order-by/order-by.pipe';
import { FilterPipe } from 'src/app/shared/pipes/filter-pipe/filter.pipe';
import { DialogComponent } from './dialog/dialog.component';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent implements OnInit, OnDestroy {
  private searchSubscription: Subscription;
  private storeSubscription: Subscription;
  public courses: Course[] = [];
  public addCourseIcon: IconDefinition = faPlus;

  constructor(
    private orderBy: OrderByPipe,
    private filter: FilterPipe,
    private coursesService: VideoCoursesService,
    private router: Router,
    private store: Store<AppState>,
    public dialog: MatDialog
  ) {}

  public ngOnInit(): void {
    this.storeSubscription = this.store
      .select('courses')
      .pipe(map((cousesState) => cousesState.courses))
      .subscribe((courses: Course[]) => {
        this.courses = this.orderBy.transform(courses);
      });
    this.searchSubscription = this.coursesService.searchValue
      .pipe(debounce(() => interval(500)))
      .subscribe((value) => {
        this.coursesService.getCourses(
          0,
          this.coursesService.loadAmount,
          value
        );
      });
  }

  public loadCourses(): void {
    this.coursesService.loadAmount += 3;
    this.coursesService.getCourses(0, this.coursesService.loadAmount);
  }

  public onCourseDeleted(id: number): void {
    const dialogRef: MatDialogRef<DialogComponent> = this.dialog.open(
      DialogComponent,
      {
        width: '250px',
      }
    );

    dialogRef.afterClosed().subscribe(() => {
      this.coursesService.removeCourse(id).subscribe();
      this.coursesService.getCourses(0, this.coursesService.loadAmount);
    });
  }

  public addCourse(): void {
    this.router.navigate(['/new-course']);
  }

  public ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
    this.storeSubscription.unsubscribe();
  }
}
