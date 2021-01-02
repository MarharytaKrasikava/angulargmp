import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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

  constructor(
    private route: ActivatedRoute,
    private courseService: VideoCoursesService,
    private router: Router,
    private store: Store
  ) {}

  public ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    if (!id) {
      return;
    }
    this.courseService.getCourse(id).subscribe((course) => {
      this.course = course;
    });
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(form: NgForm): void {
    const newCourse = new Course(
      this.course?.id || new Date().getTime(),
      form.value.title,
      form.value.creationDate
        ? new Date(this.extractDate(form.value.creationDate)).toDateString()
        : this.course.date,
      form.value.duration || this.course.length,
      form.value.description,
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

  private extractDate = (value: string) => {
    const dateParams = typeof value === 'string' && value.split('/');
    return `${dateParams[2]}-${dateParams[1]}-${dateParams[0]}`;
  };
}
