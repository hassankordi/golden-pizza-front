import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  regestration(data:any):Observable<any>{
    console.log(data);
    
    return this._HttpClient.post('http://localhost:9000/addUser' , data)
  }
  constructor(private _HttpClient:HttpClient ) { }
}
