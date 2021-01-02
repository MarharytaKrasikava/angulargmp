import {
  Component,
  Input,
  forwardRef,
  OnChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DurationInputComponent),
      multi: true,
    },
  ],
})
export class DurationInputComponent implements ControlValueAccessor, OnChanges {
  @Input() public duration: number;

  public ngOnChanges(): void {
    this.onChange(this.duration || 0);
  }

  public setDuration(newValue: number): void {
    this.duration = newValue;
    this.onChange(newValue);
    this.onTouched();
  }

  public onChange = (value: any) => {};
  public onTouched = () => {};

  public registerOnChange(fn: any) {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public writeValue(value: number): void {
    this.duration = value;
  }
}
