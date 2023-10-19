import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-track',
  templateUrl: './order-track.component.html',
  styleUrls: ['./order-track.component.scss']
})
export class OrderTrackComponent {
  @Input()activeStep:any
  @Input()steps:any

}
