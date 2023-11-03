import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  showLogin = false;
  OpenToLogin(){
    this.showLogin = true;
  }

  OpenToSignup(){
    this.showLogin=false;
  }
}
