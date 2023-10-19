import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordercart',
  templateUrl: './ordercart.component.html',
  styleUrls: ['./ordercart.component.scss']
})
export class OrdercartComponent {

  constructor(private router:Router){}
  navigateToOrderRecord=(id:Number)=>{
    this.router.navigate([`orders/${id}`])

  }


}
