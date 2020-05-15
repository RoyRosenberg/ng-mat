import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

  click() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }

}
