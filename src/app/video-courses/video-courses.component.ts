import { Component } from '@angular/core';

@Component({
  selector: 'app-video-courses',
  templateUrl: './video-courses.component.html',
  styleUrls: ['./video-courses.component.css']
})
export class VideoCoursesComponent {
  public filterString: string = '';

  public filterCourses(value: string): void {
    this.filterString = value;
  }
}
