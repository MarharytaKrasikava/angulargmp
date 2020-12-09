import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent {
  @Output() newDurationValueSet: EventEmitter<number> = new EventEmitter<number>();
  @Input() public duration: number;

  public setDuration(): void {
    this.newDurationValueSet.emit(this.duration);
  }

}
