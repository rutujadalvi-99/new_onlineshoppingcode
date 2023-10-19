import { Component } from '@angular/core';
import { gounsPage } from 'src/Data/Gouns/gouns';
import { menJeans } from 'src/Data/Men/men_jeans';
import { mens_kurta } from 'src/Data/Men/men_kurta';
import { lengha_page } from 'src/Data/Women/LenghaCholi';
import { mensShoesPage } from 'src/Data/shoes';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
menJeans:any;
womenGouns:any;
lenghaCholi:any;
mensKurta:any;
mensShoes:any;
ngOnInit() {
  this.menJeans=menJeans.slice(0,5);
  this.womenGouns=gounsPage.slice(0,5);
  this.lenghaCholi=lengha_page.slice(0,5);
  this.mensKurta=mens_kurta.slice(0,5);
  this.mensShoes=mensShoesPage.slice(0,5);

  
}
}
