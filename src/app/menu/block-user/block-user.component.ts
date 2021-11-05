import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.scss']
})
export class BlockUserComponent implements OnInit {

  blockByEmail(){
    this.byEmail = true;
    this.byPhone = false;
    console.log(this.byPhone);
    console.log(this.byEmail);

  }
 
  blockByPhone() {
    this.byEmail = false;
    this.byPhone = true
    console.log(this.byPhone);
    console.log(this.byEmail);
  }
  
  byEmail: boolean = false;
  byPhone: boolean = false;

  



  
  token = localStorage.getItem('userLoginToken')
  
  user: any;
  email: any;
  phone: any;
  userMessage: any;
  userByEmail() {
    this.email = (document.getElementById("emailInp") as HTMLFormElement).value;
    console.log((document.getElementById("emailInp") as HTMLFormElement).value);


    this._UserService.blockUserByEmail(this.email, this.token).subscribe((result) => {
      console.log(result);
      this.user = result.user;
      this.userMessage = result.message
      console.log(this.user);



    }, (err) => {
      console.log(err);

    })
  }
  userByPhone() {
    this.phone = (document.getElementById("phoneInp") as HTMLFormElement).value;
    console.log((document.getElementById("phoneInp") as HTMLFormElement).value);


    this._UserService.blockUserByPhone(this.phone, this.token).subscribe((result) => {
      console.log(result);
      this.user = result.user;
      this.userMessage = result.message
      console.log(this.user);



    }, (err) => {
      console.log(err);

    })
  }



  constructor(private _UserService:UserService ) { }

  ngOnInit(): void {
  }

}
