import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ratingCountModel} from './ratingCountModel';
import {widthRatios} from './widthRatios';

@Component({
  selector: 'app-rating-count',
  templateUrl: './rating-count.component.html',
  styleUrls: ['./rating-count.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RatingCountComponent implements OnInit {
  widthExp: number;
  ratingCountModel:ratingCountModel;
  widthRatios:widthRatios;
  constructor() { 
   this.widthExp =100;

  }

  ngOnInit(): void {
    const maxuseful = Math.max(this.ratingCountModel.useful1,this.ratingCountModel.useful2,this.ratingCountModel.useful3,this.ratingCountModel.useful4,this.ratingCountModel.useful5);
    const maxEngaging =Math.max((this.ratingCountModel.enggaging1,this.ratingCountModel.enggaging2,this.ratingCountModel.enggaging3,this.ratingCountModel.enggaging4,this.ratingCountModel.enggaging5));
    this.widthRatios.enggaging1 = (this.ratingCountModel.enggaging1 *100 / maxEngaging);
    this.widthRatios.enggaging2 = (this.ratingCountModel.enggaging2 *100 / maxEngaging);
    this.widthRatios.enggaging3 = (this.ratingCountModel.enggaging3 *100 / maxEngaging);
    this.widthRatios.enggaging4 = (this.ratingCountModel.enggaging4 *100 / maxEngaging);
    this.widthRatios.enggaging5 = (this.ratingCountModel.enggaging5 *100 / maxEngaging);

    this.widthRatios.useful1 = (this.ratingCountModel.useful1 *100 / maxuseful);
    this.widthRatios.useful2 = (this.ratingCountModel.useful2 *100 / maxuseful);
    this.widthRatios.useful3 = (this.ratingCountModel.useful3 *100 / maxuseful);
    this.widthRatios.useful4 = (this.ratingCountModel.useful4 *100 / maxuseful);
    this.widthRatios.useful5 = (this.ratingCountModel.useful5 *100 / maxuseful);

const usefulSum = this.ratingCountModel.useful1 + this.ratingCountModel.useful2 +this.ratingCountModel.useful3 +this.ratingCountModel.useful4 +this.ratingCountModel.useful5;
const engagingSum = this.ratingCountModel.enggaging1 + this.ratingCountModel.enggaging2 +this.ratingCountModel.enggaging3 +this.ratingCountModel.enggaging4 +this.ratingCountModel.enggaging5 ;

const usefulAvg = (this.ratingCountModel.useful1 + this.ratingCountModel.useful2 *2 +this.ratingCountModel.useful3 *3 +this.ratingCountModel.useful4 *4 +this.ratingCountModel.useful5 *5) /usefulSum;
const engagingAvg = (this.ratingCountModel.enggaging1 + this.ratingCountModel.enggaging2 *2 +this.ratingCountModel.enggaging3 *3 +this.ratingCountModel.enggaging4 *4 +this.ratingCountModel.enggaging5*5) ;
  }


}
