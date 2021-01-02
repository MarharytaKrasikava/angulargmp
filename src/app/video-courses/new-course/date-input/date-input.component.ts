import { Component, Input, forwardRef, OnChanges } from '@angular/core';
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
export class DateInputComponent implements ControlValueAccessor, OnChanges {
  @Input() public dateValue: string;

  public ngOnChanges() {
    this.onChange(this.formatDate(this.dateValue) || '');
  }

  public changeValue(newDateValue: string): void {
    this.onChange(newDateValue);
    this.onTouched();
  }

  public formatDate(dateString: string): string {
    const date = new Date(dateString);
    const completeDate = (date) => date > 10 ? date : `${0}${date}`;
    return `${completeDate(date.getDate())}/${completeDate(date.getMonth() + 1)}/${date.getFullYear()}`;
  }

  public onChange = (value: any) => {};
  public onTouched = () => {};

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(value: string): void {
    this.dateValue = value;
  }

}
