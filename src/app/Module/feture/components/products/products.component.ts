import { Component } from '@angular/core';
import { filters, singleFilter } from './filterData';
import { mensPantsPage1 } from 'src/Data/pants/men_page';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  filterData:any;
  singleFilterData:any;
  menPants:any;

  constructor(private router:Router,private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.filterData=filters;
    this.singleFilterData=singleFilter;
    this.menPants=mensPantsPage1;
  }

  handleMultipleSelectFilter(value:string,sectionId:string){
    const queryParams={...this.activatedRoute.snapshot.queryParams};
    console.log(queryParams);
    //if have i make arry or not i create empty array
   const filterValues=queryParams[sectionId]?queryParams[sectionId].split(","):[]; 
   const valueIndex=filterValues.indexOf(value);
   //i have to chech here color have or not if have i have to remove. if not i have to add it 
   if(valueIndex!=-1){//if valueindex !=-1 index so i have to remove it
    filterValues.splice(valueIndex,1);

   }else{
    filterValues.push(value);//if -1 mens already no present  so i have to add it
   }
   if(filterValues.length>0){
    queryParams[sectionId]=filterValues.join(",");
   }else{
    delete queryParams[sectionId];
   }

   this.router.navigate([],{queryParams})
    
    

  }
  handelSingleSelectFilter(value:string,sectionId:string){
    const queryParams ={...this.activatedRoute.snapshot.queryParams}
    console.log(queryParams);
    queryParams[sectionId]=value;

    this.router.navigate([],{queryParams})
    
  }
 


}
