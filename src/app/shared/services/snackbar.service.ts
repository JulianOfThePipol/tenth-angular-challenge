import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable, NgZone } from '@angular/core';

@Injectable({providedIn: "root"})
export class SnackbarService {
  constructor(
    private snackBar:MatSnackBar,
    private zone: NgZone,
    ) {};

  openSnackBarSuccess (message: string):void {
    this.zone.run(() =>{
      this.snackBar.open( message, 'Close', {
        duration: 3000,
        panelClass: ['green-snackbar', 'success-snackbar'],
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    })
  };

  openSnackBarWarning (message: string):void {
    this.zone.run(() =>{
      this.snackBar.open( message, 'Close', {
        duration: 3000,
        panelClass: ['red-snackbar', 'warn-snackbar'],
        verticalPosition: 'bottom',
        horizontalPosition: 'center'
      })
    })
  };


};
