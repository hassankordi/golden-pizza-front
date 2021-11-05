import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class PathGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      // write your fun code here
      if(this._UserService.isAdmin ===true){
        return true;

      }
      else{
        this._Router.navigate(['/menu'])

        return false
      }
      
    
  }

  constructor(private _UserService:UserService ,private _Router:Router){

  }
  
}
