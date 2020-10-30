import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Course } from '../../../shared/models';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit, OnChanges {
  @Output() public courseDeleted: EventEmitter<string> = new EventEmitter<string>();
  @Input() public course: Course;

  public durationIcon: IconDefinition = faClock;
  public dateIcon: IconDefinition = faCalendarAlt;
  public editIcon: IconDefinition = faPencilAlt;
  public deleteIcon: IconDefinition = faTrash;

  constructor() {
    console.log('constructor called');
  }

  public ngOnInit(): void {
    console.log('initiolized');
  }

  public ngOnChanges(): void {
    console.log('changed');
  }

  public onDelete(): void {
    this.courseDeleted.emit(this.course.id);
  }

}