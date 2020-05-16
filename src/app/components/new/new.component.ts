import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';

interface Parser {
  name: string;
  description: string;
  checked: boolean;
}

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  loading = false;
  showCustomCopy = false;
  showParsers = false;
  options = ['one', 'two', 'three'];
  parsers: Parser[] = [
    { name: 'תמונות', description: 'מנתח תמונות', checked: true },
    { name: 'סרטונים', description: 'מנתח סרטונים', checked: true },
    { name: 'מסמכים', description: 'מנתח מסמכים', checked: true },
    { name: 'היסטוריה', description: 'מנתח הסטוריה', checked: true },
  ];
  constructor(private alertSrv: AlertService) { }

  ngOnInit() {
  }

  openSnackBar(message: string, action: string) {
    this.alertSrv.showInformation('זוהי הודעה', action);
    this.alertSrv.showWarning('זוהי אזהרה', action);
    this.alertSrv.showError('זוהי שגיאה', action);
  }

  click() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }

}
