import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'durationPipe'
})
export class DurationFormattingPipe implements PipeTransform {

  public transform(value: number): string {
    const hours: number = value / 60;
    if (hours >= 1) {
      const rest: number = value % 60;
      return `${Math.trunc(hours)}h` + (rest > 0 ? ` ${rest}min` : '');
    }
    return `${value}min`;
  }

}
