import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models';
import { VideoCoursesService } from 'src/app/shared/services/video-courses-service/video-courses.service';

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
    private router: Router
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
    this.courseService
      .createCourse(
        new Date().getTime(),
        this.titleValue,
        new Date(this.dateValue).toDateString(),
        this.durationValue,
        { id: 123, name: 'Marho' },
        false
      )
      .subscribe(() => {
        this.router.navigate(['/courses']);
      });
  }

  public dateValueChanged(value): void {
    this.dateValue = value;
  }

  public durationValueChanged(value): void {
    this.durationValue = value;
  }
}
