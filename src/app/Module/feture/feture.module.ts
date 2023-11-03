import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetureComponent } from './components/feture.component';
import { HomeComponent } from './components/home/home.component';
import { MainCarouselComponent } from './components/home/main-carousel/main-carousel.component';
import { ProductSliderComponent } from './components/home/product-slider/product-slider.component';
import { HomeProductCardComponent } from './components/home/home-product-card/home-product-card.component';
import { ProductsComponent } from './components/products/products.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import { SharedModule } from "../shared/shared.module";
import { CartComponent } from './components/cart/cart.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { OrderComponent } from './components/order/order.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ProductReviewCardComponent } from './components/product-details/product-review-card/product-review-card.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { AddressFormComponent } from './components/checkout/address-form/address-form.component';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { OrdercartComponent } from './components/order/ordercart/ordercart.component';
import { LoginComponent } from '../shared/components/login/login.component';



@NgModule({
    declarations: [
        FetureComponent,
        HomeComponent,
        MainCarouselComponent,
        ProductSliderComponent,
        HomeProductCardComponent,
        ProductsComponent,
        CartComponent,
        ProductDetailsComponent,
        CheckoutComponent,
        PaymentComponent,
        PaymentSuccessComponent,
        OrderComponent,
        OrderDetailsComponent,
        ProductReviewCardComponent,
        AddressFormComponent,
        OrdercartComponent,
        LoginComponent,
    
    ],
    exports: [
        FetureComponent,
        HomeComponent,
        ProductsComponent,
        LoginComponent,
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatMenuModule,
        MatDividerModule,
        MatIconModule,
        MatCheckboxModule,
        FormsModule,
        MatRadioModule,
        SharedModule,
        MatProgressBarModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class FetureModule { }
