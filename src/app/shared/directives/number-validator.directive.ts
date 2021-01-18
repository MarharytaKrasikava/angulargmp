import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[validateNumber]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: NumberValidatorDirective,
      multi: true,
    },
  ],
})
export class NumberValidatorDirective implements Validator {
  validate(control: FormControl): ValidationErrors | null {
    if (+control.value > 0) {
      return;
    } else return { isInvalid: true };
  }
}
