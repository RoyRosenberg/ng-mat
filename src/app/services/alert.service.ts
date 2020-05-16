import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private snackBar: MatSnackBar) { }

  showError(message: string, action: string) {
    this.snackBar.open(`🛑 ${message}`, action, {
      // duration: 2000,
      // panelClass: ['mat-toolbar', 'mat-warn']
    });
  }

  showWarning(message: string, action: string) {
    this.snackBar.open(`⚠️ ${message}`, action, {
      // duration: 2000,
      // panelClass: ['mat-toolbar', 'mat-accent']
    });
  }

  showInformation(message: string, action: string) {
    this.snackBar.open(`💬 ${message}`, action, {
      // duration: 2000,
      // panelClass: ['mat-toolbar', 'mat-primary']
    });
  }

}
