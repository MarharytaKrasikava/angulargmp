import { Component, OnInit } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-spinner',
  template: `<div class="spinner-wrapper">
    <mat-progress-spinner mode="indeterminate"></mat-progress-spinner>
  </div>`,
  styleUrls: ['./spinner.component.css'],
})
export class SpinnerComponent {}
