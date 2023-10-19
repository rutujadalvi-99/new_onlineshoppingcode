import { Component } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss']
})
export class StarRatingComponent {
  maxrating=5;
  initialrating=3;
  stars:any;
  currentingrating=0;

  constructor(){
    this.stars=Array(this.maxrating).fill(0).map((_,i)=>i+1);
    this.currentingrating=this.initialrating
  }
  rate(rating:number){
    this.currentingrating=rating
  }

}
