import { Directive, HostBinding, Input, OnInit } from '@angular/core';

import { twoWeeksMs } from './constants';

@Directive({
  selector: '[appDateHighlight]',
})
export class DateHighlightDirective implements OnInit {
  @Input() private date: Date;
  @HostBinding('class') public highlightClass: string;

  public ngOnInit(): void {
    const currentDate: Date = new Date();
    if (
      this.date < currentDate &&
      this.date.getTime() >= currentDate.getTime() - twoWeeksMs
    ) {
      this.highlightClass = 'date-highlight-new';
    } else if (this.date > currentDate) {
      this.highlightClass = 'date-highlight-upcomming';
    }
  }
}
