import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {
  orders=[1,1,1]
  steps=[

{id:0,title:"placed",iscompleted:true},
{id:1,title:"confirmed",iscompleted:true},
{id:2,title:"shipped",iscompleted:false},
{id:3,title:"delivered",iscompleted:false}

  ]

}
