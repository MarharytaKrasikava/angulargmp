import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => DateInputComponent),
    multi: true,
  }]
})
export class DateInputComponent implements ControlValueAccessor {
  @Input() public dateValue: string;
  public onChange = (value: any) => {};
  public onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(value: string) {
    this.dateValue = value;
  }

  public changeValue(newDateValue: string) {
    this.onChange(newDateValue);
    this.onTouched();
  }

  public formatDate(dateString: string) {
    const date = new Date(dateString);
    const completeDate = (date) => date > 10 ? date : `${0}${date}`;
    return `${completeDate(date.getDate())}/${completeDate(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

}
