import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  byEmail: boolean = false;
  byPhone: boolean = false;

  getByEmail() {
    this.byEmail = true;
    this.byPhone = false;
    console.log(this.byPhone);
    console.log(this.byEmail);


  }
  getByPhone() {
    this.byEmail = false;
    this.byPhone = true
    console.log(this.byPhone);
    console.log(this.byEmail);
  }



  getUsers: boolean = true;
  token = localStorage.getItem('userLoginToken')
  users: any = []
  user: any;
  email: any;
  phone: any;
  userMessage: any;
  userByEmail() {
    this.email = (document.getElementById("emailInp") as HTMLFormElement).value;
    console.log((document.getElementById("emailInp") as HTMLFormElement).value);


    this._UserService.getUserByEmail(this.email, this.token).subscribe((result) => {
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


    this._UserService.getUserByPhone(this.phone, this.token).subscribe((result) => {
      console.log(result);
      this.user = result.user;
      this.userMessage = result.message
      console.log(this.user);



    }, (err) => {
      console.log(err);

    })
  }



  getAllUsers() {

    this.getUsers = !this.getUsers
  }

  constructor(private _UserService: UserService) {

    this._UserService.getAllUsers(this.token).subscribe((results) => {
      console.log('results');

      console.log(results);
      this.users = results.users;

      // this.getAllUsers()

    }, (err) => {
      console.log(err);

    })

  }

  ngOnInit(): void {

  }

}
