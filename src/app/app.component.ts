import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-mat01';
  loading = false;
  show = false;
  options = ['one', 'two', 'three'];

  click() {
    this.loading = true;
    setTimeout(() => this.loading = false, 2000);
  }
}
