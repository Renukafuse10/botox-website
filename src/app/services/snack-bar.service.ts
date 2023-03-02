import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackBarService {

  error(arg0: string) {
    throw new Error('Method not implemented.');
  }
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor (private _snackBar: MatSnackBar) { }

  openSnackBar (message: string, action: string, duration: number = 5000) {
    const options: any = {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition
    };
    if (duration) {
      options.duration = duration
    }
    this._snackBar.open(message, action, options);
  }
}
