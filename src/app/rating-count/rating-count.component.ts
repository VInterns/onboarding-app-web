import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-rating-count',
  templateUrl: './rating-count.component.html',
  styleUrls: ['./rating-count.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RatingCountComponent implements OnInit {
  widthExp: number;

  constructor() { 
   this.widthExp =40;
  }

  ngOnInit(): void {
  }


}
