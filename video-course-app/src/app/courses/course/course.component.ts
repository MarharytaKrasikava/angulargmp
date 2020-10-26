import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Course } from '../../shared/course.model';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnChanges {
  durationIcon = faClock;
  dateIcon = faCalendarAlt;
  editIcon = faPencilAlt;
  deleteIcon = faTrash;

  @Input() course: Course;
  @Output() courseDeleted = new EventEmitter<string>();

  constructor() {
    console.log('constructor called');
  }

  ngOnInit(): void {
    console.log('initiolized');
  }

  ngOnChanges(): void {
    console.log('changed');
  }

  onDelete(): void {
    this.courseDeleted.emit(this.course.id);
  }

}
