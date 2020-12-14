import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-duration-input',
  templateUrl: './duration-input.component.html',
  styleUrls: ['./duration-input.component.css']
})
export class DurationInputComponent {
  @Input() public duration: number;

}
