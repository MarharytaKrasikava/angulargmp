import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Course } from 'src/app/shared/models';
import { VideoCoursesService } from 'src/app/shared/services/video-courses-service/video-courses.service';
import * as CoursesActions from '../courses/store/courses.actions';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  public course: Course;
  public titleValue: string;
  public descriptionValue: string;
  private dateValue: Date;
  private durationValue: number;

  constructor(
    private route: ActivatedRoute,
    private courseService: VideoCoursesService,
    private router: Router,
    private store: Store
  ) {}

  public ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    if (!id) return;
    this.courseService.getCourse(id).subscribe((course) => {
      this.course = course;
    });
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(): void {
    const newCourse = new Course(
      this.course?.id || new Date().getTime(),
      this.titleValue,
      this.dateValue ? new Date(this.dateValue).toDateString() : this.course.date,
      this.durationValue || this.course.length,
      this.descriptionValue,
      false,
      { id: 123, name: 'Marho' }
    );
    if (this.course) {
      this.store.dispatch(new CoursesActions.EditCourse(newCourse));
    } else {
      this.store.dispatch(new CoursesActions.AddCourse(newCourse));
    }
    this.router.navigate(['/courses']);
  }

  public dateValueChanged(value): void {
    this.dateValue = value;
  }

  public durationValueChanged(value): void {
    this.durationValue = value;
  }
}
