import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  template: `<h2>Course Remove</h2>
    <mat-dialog-content class="mat-typography"
      >{{'DIALOG.MESSAGE' | translate}}</mat-dialog-content
    >
    <mat-dialog-actions align="center">
      <button mat-button (click)="onCancel()">{{'DIALOG.CANCEL_BUTTON' | translate}}</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>
        {{'DIALOG.DELETE_BUTTON' | translate}}
      </button>
    </mat-dialog-actions>`,
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}
  public onCancel(): void {
    this.dialogRef.close();
  }
}
