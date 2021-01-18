import { Directive } from '@angular/core';
import {
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
} from '@angular/forms';

@Directive({
  selector: '[validateAuthors]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AuthorsValidatorDirective,
      multi: true,
    },
  ],
})
export class AuthorsValidatorDirective implements Validator {
  public validate(control: FormControl): ValidationErrors | null {
    const { value } = control;
    if (!value?.length) {
      return { dateInvalid: true };
    }
  }
}
