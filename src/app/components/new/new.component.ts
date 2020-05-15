import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  loading = false;
  show = false;
  options = ['one', 'two', 'three'];

  constructor() { }

  ngOnInit() {
  }

  click() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }

}
