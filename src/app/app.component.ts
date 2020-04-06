import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'main-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private _router: Router) {
    this._router.navigate(['login']);
  }
  ngOnInit(): void {
    // this._router.navigate(['login']);
  }
  title = 'Hello Angular 7!!';
  isShown: boolean = false;
}

