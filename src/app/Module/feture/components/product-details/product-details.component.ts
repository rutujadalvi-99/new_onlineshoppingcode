import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gounsPage } from 'src/Data/Gouns/gouns';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  selectedSize:any;
  reviews=[1,1,1];
  reproducts:any;
  constructor(private router:Router){
  }
ngOnInit() {
 this.reproducts=gounsPage;
  
}

  handleAddToCart(){

    console.log("selectedsize",this.selectedSize);
    this.router.navigate(['cart'])
    
  }
}
