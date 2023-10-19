import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RetailerRoutingModule } from './retailer-routing.module';
import { RdetailsComponent } from './components/rdetails/rdetails.component';


@NgModule({
  declarations: [

  
    RdetailsComponent
  ],
  imports: [
    CommonModule,
    RetailerRoutingModule
  ]
})
export class RetailerModule { }
