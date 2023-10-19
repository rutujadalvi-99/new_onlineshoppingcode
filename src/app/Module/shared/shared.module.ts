import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavContentComponent } from './components/navbar/nav-content/nav-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ProductCartComponent } from './components/product-cart/product-cart.component';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { AddressCardComponent } from './components/address-card/address-card.component';
import { OrderTrackComponent } from './order-track/order-track.component';
import { MatDividerModule } from '@angular/material/divider';



@NgModule({
  declarations: [
    NavbarComponent,
    NavContentComponent,
    FooterComponent,
    ProductCartComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackComponent

  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatDividerModule
  ],
  exports:[
    NavbarComponent,
    FooterComponent,
    ProductCartComponent,
    StarRatingComponent,
    CartItemComponent,
    AddressCardComponent,
    OrderTrackComponent
   
  
    
  ]
})
export class SharedModule { }
