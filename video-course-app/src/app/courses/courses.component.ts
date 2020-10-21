import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  addCourseIcon = faPlus;

  constructor() { }

  ngOnInit(): void {
  }

  loadCourses(): void {
    console.log('loading...');
  }
}
