import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent {
  addresses=[1,1,1]
  myForm:FormGroup=this.formBuilder.group({
    firstName:["",Validators.required],
    lastName:["",Validators.required],
    street:["",Validators.required],
    city:["",Validators.required],
    state:["",Validators.required],
    zipcode:["",Validators.required],
    mobile:["",Validators.required],
  })

  constructor(private formBuilder:FormBuilder){}
  handalorder(item:any){

  }

  save(){
    let formdata=this.myForm.value;
    console.log("form data",formdata);
    
  }

}
