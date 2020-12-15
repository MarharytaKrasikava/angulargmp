import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent {
  @Output() public newDateValueSet: EventEmitter<Date> = new EventEmitter<Date>();
  @Input() public dateValue: string;
  public newDateValue: Date;

  public changeValue() {
    this.newDateValueSet.emit(this.newDateValue);
  }

  public formatDate(dateString: string) {
    const date = new Date(dateString);
    const completeDate = (date) => date > 10 ? date : `${0}${date}`;
    return `${date.getFullYear()}-${completeDate(date.getMonth() + 1)}-${completeDate(date.getDate())}`;
  }

}
