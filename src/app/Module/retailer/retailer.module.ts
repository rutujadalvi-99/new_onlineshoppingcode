import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { RetailerProductComponent } from './components/retailer-product/retailer-product.component';
import { RdetailsComponent } from './components/rdetails/rdetails.component';
import { RordersComponent } from './components/rorders/rorders.component';
import { RetailerdeleteComponent } from './components/retailerdelete/retailerdelete.component';




@NgModule({
  declarations: [
    RetailerProductComponent,
    RdetailsComponent,
    RordersComponent,
    RetailerdeleteComponent
  ],
  imports: [
    CommonModule,
    RetailerRoutingModule
  ]
})
export class RetailerModule { }
