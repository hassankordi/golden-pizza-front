import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service'
import {Router} from '@angular/router'


import { SocialAuthService, GoogleLoginProvider, SocialUser } from "angularx-social-login";
const googleLoginOptions = {
  scope: 'profile email'
}; 
// https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig

const config = [
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("566957944883-4ovoi05bh8g3ktjqju57r7s2fgte1e36.apps.googleusercontent.com", googleLoginOptions)
  }


];


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {


  constructor(
    private authService: SocialAuthService,
    private _UserService: UserService,
    private _Router:Router
    ) { }

  ngOnInit(): void {
// hena fe 7d bera2eb el data zay el observable
    this.authService.authState.subscribe((user) => {
      this.user = user;

      this._UserService.loginWithGoogle(user.idToken).subscribe((x)=>{
        console.log(x);
        localStorage.setItem('userLoginToken',x.token)
        
      })
      this.loggedIn = (user != null);
      console.log(user , this.loggedIn);
        if(this.loggedIn){
        this._Router.navigate(['/menu'])

      }

      
    });
  }

  user: SocialUser = new SocialUser; // hena fe 7d bera2eb el data zay el observable
  loggedIn: boolean = false;


  signInWithGoogle(): void {
  
    
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
   
  }

  refreshToken(): void {
    this.authService.refreshAuthToken(GoogleLoginProvider.PROVIDER_ID);
  }


  signOut(): void {
    this.authService.signOut();
  }


  userData = new FormGroup({
     email: new FormControl('', [Validators.email, Validators.required]),
     password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),

  })


  message: any;
  sendData() {
    console.log(this.userData);
    this._UserService.login(this.userData.value).subscribe((x) => {
      console.log(x);
      
      localStorage.setItem('userLoginToken',x.token)
      this.message = x.message
      console.log(this.message);
      if(this.message =='login success'){
        this._Router.navigate(['/menu'])
      }
      // if(this.loggedIn){
      //   this._Router.navigate(['/menu'])

      // }


    }, (err) => {
      // el error aly gay mn validation req m4 zay el error aly gay mn controllers
      this.message = err.error.message
      console.log(this.message);
    })
  }


  /*********show password */
  show1() {
    var x = (document.getElementById("pass1") as HTMLFormElement);

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
 

}
