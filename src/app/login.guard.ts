import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // if is login = true then you dont need to get is login componant
      if(this._UserService.isLogin === true){
        console.log('this is the guard login dont pass' );
        
        return false;

      }
      else{
        
        
        console.log('this is the guard login pass' );

        // this._Router.navigate(['/menu'])

        return true
      }
  }

  constructor(private _UserService:UserService , private _Router:Router){}
  
}
