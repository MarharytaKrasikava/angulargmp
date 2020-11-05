import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { Course } from '../../../../shared/models';

@Directive({
  selector: '[appDateHighlight]',
})
export class DateHighlightDirective implements OnInit {
  @Input() private course: Course;
  @HostBinding('style.border') public border: string;

  public ngOnInit(): void {
    const currentDate: Date = new Date();
    const { creationDate } = this.course;
    const twoWeeksMs: number = 14 * 24 * 3600 * 1000;
    if (
      creationDate < currentDate &&
      creationDate.getTime() >= currentDate.getTime() - twoWeeksMs
    ) {
      this.border = '3px solid #94d447';
    } else if (creationDate > currentDate) {
      this.border = '3px solid #50b9e8';
    }
  }
}
