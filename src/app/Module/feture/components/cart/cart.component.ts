import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
cart=[1,1,1]
constructor(private router:Router){
  
}
redirectToCkectout(){
  this.router.navigate(["checkout"])

}

}
