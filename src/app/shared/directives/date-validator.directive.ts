import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[validateDate]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: DateValidatorDirective,
      multi: true,
    },
  ],
})
export class DateValidatorDirective implements Validator {
  validate(control: FormControl): ValidationErrors | null {
    const { value } = control;
    const dateParams = typeof value === 'string' && value.split('/');
    if (!dateParams) {
      return { dateInvalid: true };
    }
    const day = dateParams[0];
    const month = dateParams[1];
    const year = dateParams[2];
    if (
      !dateParams ||
      dateParams.length !== 3 ||
      !new Date(`${year}-${month}-${day}`) ||
      new Date(`${year}-${month}-${day}`) > new Date() ||
      day.length !== 2 ||
      month.length !== 2 ||
      year.length !== 4
    ) {
      return { dateInvalid: true };
    }
  }
}
