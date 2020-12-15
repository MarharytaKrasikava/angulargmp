import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from '../../../shared/models';
import { faClock, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faPencilAlt,
  faTrash,
  faStar,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent{
  @Output()
  public courseDeleted: EventEmitter<number> = new EventEmitter();
  @Input() public course: Course;
  @Input() public date: Date;

  public durationIcon: IconDefinition = faClock;
  public dateIcon: IconDefinition = faCalendarAlt;
  public editIcon: IconDefinition = faPencilAlt;
  public deleteIcon: IconDefinition = faTrash;
  public starIcon: IconDefinition = faStar;

  public onDelete(): void {
    this.courseDeleted.emit(this.course.id);
  }
}
