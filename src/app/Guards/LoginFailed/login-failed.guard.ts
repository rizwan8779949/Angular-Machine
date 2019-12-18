import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginFailedGuard implements CanActivate {
  constructor(private router: Router) {}

    canActivate() {
        if (!localStorage.getItem("token")) {
            return true;
        } else {
            this.router.navigateByUrl("home")
        }
    }
  
}
