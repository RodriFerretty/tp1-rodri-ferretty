import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class SecureLoggedInPagesGuard implements CanActivate {
  constructor(
    public authService: AuthService,
    public router: Router
  ){ }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggedIn) {
      window.alert("Ya estas logueado, no podés acceder a esta página, no te hagas el pícaro.");
       this.router.navigate(['/'])
    }
    return true;
  }
  
}
