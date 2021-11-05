import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { compileDeclareNgModuleFromMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   
  isLogin =false
  isAdmin:boolean = false 
  isUser:boolean = false 
 


  login(data: any): Observable<any> {
    console.log(data);
    return this._HttpClient.post('http://localhost:2526/sign_in', data)
  }
  loginWithGoogle(token: any): Observable<any> {
    return this._HttpClient.post(`http://localhost:2526/sign_in/google`, {
      token
    })
  }
  regestration(data: any): Observable<any> {
    console.log(data);

    return this._HttpClient.post('http://localhost:2526/sign_up', data)
  }
  getAllUsers(data: any): Observable<any> {
    console.log(data);
    let headers_object = new HttpHeaders().set("Authorization", "Bearer " + data);

    return this._HttpClient.get(`http://localhost:2526/users`, {headers:headers_object})
  }
  getUserByEmail(email:any,token:any): Observable<any> {
    console.log(email);
     let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    //  let params_object = new HttpParams().append('email',email);
    const body:object={
      email
    }

    return this._HttpClient.post(`http://localhost:2526/users/byEmail`,body,{
  
      headers:headers_object,
      observe:'body',
      
      
      
    })
  }
  getUserByPhone(phone:any,token:any): Observable<any>{
    console.log(phone);
     let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    //  let params_object = new HttpParams().append('email',email);
    const body:object={
      phone
    }

    return this._HttpClient.post(`http://localhost:2526/users/byPhone`,body,{
  
      headers:headers_object,
      observe:'body',
      
      
      
    })

  }




  blockUserByEmail(email:any,token:any): Observable<any> {
    console.log(email);
     let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    //  let params_object = new HttpParams().append('email',email);
    const body:object={
      email
    }

    return this._HttpClient.patch(`http://localhost:2526/users/blockByEmail`,body,{
  
      headers:headers_object,
      observe:'body',
      
      
      
    })
  }
  blockUserByPhone(phone:any,token:any): Observable<any>{
    console.log(phone);
     let headers_object = new HttpHeaders().set("Authorization", "Bearer " + token);
    //  let params_object = new HttpParams().append('email',email);
    const body:object={
      phone
    }

    return this._HttpClient.patch(`http://localhost:2526/users/blockByPhone`,body,{
  
      headers:headers_object,
      observe:'body',
      
      
      
    })

  }


  /* test code */

  constructor(private _HttpClient: HttpClient) { }

}
