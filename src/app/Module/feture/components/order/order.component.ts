import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent {
  orderFilter=[
    {value:"On_The_way",label:"On The Way"},
    {value:"delivered",label:"delivered"},
    {value:"cancelled",label:"cancelled"},
    {value:"return",label:"Return"},   
  ]
  orders=[[1,1],[1,1,1]]
  constructor(private router:Router){}
  navigateToOrderRecord=(id:Number)=>{
    this.router.navigate([`order/${id}`])

  }


}
