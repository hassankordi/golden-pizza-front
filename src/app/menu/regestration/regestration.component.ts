import { Component, OnInit } from '@angular/core';


import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../user.service'
import {Router} from '@angular/router'

@Component({
  selector: 'app-regestration',
  templateUrl: './regestration.component.html',
  styleUrls: ['./regestration.component.scss']
})
export class RegestrationComponent implements OnInit {

  constructor(
    private _UserService:UserService,
    private _Router:Router,
     ) { }


  userData = new FormGroup({
     name: new FormControl('', [Validators.minLength(3), Validators.maxLength(22), Validators.required]),
     email: new FormControl('', [Validators.email, Validators.required]),
     password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
     confirm_password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]),
     location: new FormControl(''),
     phone: new FormControl('', [Validators.pattern(/^(011|010|012|015)[0-9]{8}$/), Validators.required]),
  })


  message: any;
  sendData() {
    console.log(this.userData);
    this._UserService.regestration(this.userData.value).subscribe((x) => {
      this.message = x.message
      console.log(this.message);
      if(this.message =='created success'){
        this._Router.navigate(['/login'])
      }


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
  show2() {
    var x = (document.getElementById("pass2") as HTMLFormElement);

    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  ngOnInit(): void {
  }

}
