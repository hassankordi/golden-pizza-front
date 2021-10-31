import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {
  getUsers:boolean = false;
   token =  localStorage.getItem('userLoginToken')
   users:any=[]

  getAllUsers(){
   
this.getUsers=!this.getUsers
  }

  constructor(private _UserService:UserService) { 
    this._UserService.getAllUsers(this.token).subscribe((results)=>{
      console.log(results);
      this.users = results.users;

      // this.getAllUsers()
     
    } ,(err)=>{
      console.log(err);
      
    })
  
  }

  ngOnInit(): void {
    
  }

}
