import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular 7!!';
  isShown:boolean=false;
}
