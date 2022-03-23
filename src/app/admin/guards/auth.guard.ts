import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor( private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const user = localStorage.getItem('user')
    if (user) {
      return true
    } else {
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } })
      return false
    }
  }
}
