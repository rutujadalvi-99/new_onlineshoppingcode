import { Component } from '@angular/core';
import { homeCarouselData } from 'src/Data/mainCarousel';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent {
currentSlide: number = 0;
interval:any;
carouselData:any
ngOnInit(){
  this.carouselData=homeCarouselData;
  this.autoplay()
}
autoplay(){
  setInterval(()=>{
    this.nextSlide()
  },2000)
}
nextSlide(){
  this.currentSlide=(this.currentSlide+1) % this.carouselData.length;
}

}
