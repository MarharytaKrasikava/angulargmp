import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.css']
})
export class NewCourseComponent {
  public onCancel(): void {
    console.log('Course creation canceled');
  }

  public onCreate(): void {
    console.log('A new Course created');
  }

}
