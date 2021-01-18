import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Author, Course } from 'src/app/shared/models';
import { VideoCoursesService } from 'src/app/shared/services/video-courses-service/video-courses.service';
import { AppState } from 'src/app/store/app.reducer';
import * as CoursesActions from '../courses/store/courses.actions';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css'],
})
export class NewCourseComponent implements OnInit {
  public course: Course;
  public authors: Author[];

  constructor(
    private route: ActivatedRoute,
    private courseService: VideoCoursesService,
    private router: Router,
    private store: Store<AppState>
  ) {}

  private extractDate = (value: string) => {
    const dateParams: string | string[] =
      typeof value === 'string' && value.split('/');
    return `${dateParams[2]}-${dateParams[1]}-${dateParams[0]}`;
  };

  public ngOnInit(): void {
    const id: number = this.route.snapshot.params.id;
    if (!id) {
      return;
    }
    this.courseService.getCourse(id).subscribe((course) => {
      this.course = course;
    });
  }

  public selectAuthors(value: Author[]): void {
    this.authors = value;
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(form: NgForm): void {
    const newCourse: Course = new Course(
      this.course?.id || new Date().getTime(),
      form.value.title || this.course.name,
      form.value.creationDate
        ? new Date(this.extractDate(form.value.creationDate)).toString()
        : this.course.date,
      form.value.duration || this.course.length,
      form.value.description || this.course.description,
      false,
      this.authors
    );
    if (this.course) {
      this.store.dispatch(new CoursesActions.EditCourse(newCourse));
    } else {
      this.store.dispatch(new CoursesActions.AddCourse(newCourse));
    }
    this.router.navigate(['/courses']);
  }
}
