import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { CanActivate } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
 


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
 
  constructor(public auth: AuthenticationService) {}
 
  canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}