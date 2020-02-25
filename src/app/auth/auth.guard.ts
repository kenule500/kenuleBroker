import { Router, UrlSegment, Route, CanLoad } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService, private router: Router) {}
  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
  //   if (this.authService.isAuth) {
  //     return true;
  //   } else {
  //     this.router.navigate(['/signin']);
  //   }
  // }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated) {
      this.router.navigateByUrl('/signin');
    }
    return this.authService.isAuthenticated;
  }
}
