import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/shared/models';
import { VideoCoursesService } from 'src/app/shared/services/video-courses-service/video-courses.service';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent implements OnInit {
  public course: Course;

  constructor(private route: ActivatedRoute, private courseService: VideoCoursesService, private router: Router) {}

  public ngOnInit(): void {
    const id: string = this.route.snapshot.params.id;
    this.course = this.courseService.getCourse(id);
  }

  public onCancel(): void {
    this.router.navigate(['/courses']);
  }

  public onSave(): void {
    this.router.navigate(['/courses']);
  }

}
