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
  public showBreadCrumbs: boolean = false;
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
      if (this.course) {
        this.showBreadCrumbs = true;
      }
    });
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(): void {
    console.log({
      title: this.titleValue,
      description: this.descriptionValue,
      date: this.dateValue,
      duration: this.durationValue,
    });
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
