import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { Course } from '../../models';
import { twoWeeksMs } from './constants';

@Directive({
  selector: '[appDateHighlight]',
})
export class DateHighlightDirective implements OnInit {
  @Input() private creationDate: Date;
  @HostBinding('class') public highlightClass: string;

  public ngOnInit(): void {
    const currentDate: Date = new Date();
    if (
      this.creationDate < currentDate &&
      this.creationDate.getTime() >= currentDate.getTime() - twoWeeksMs
    ) {
      this.highlightClass = 'date-highlight-new';
    } else if (this.creationDate > currentDate) {
      this.highlightClass = 'date-highlight-upcomming';
    }
  }
}
