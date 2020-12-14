// import { Injectable } from '@angular/core';
// import { Router,CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import {AuthenticationServiceService} from './authentication-service.service';
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router,
//     private authservice: AuthenticationServiceService){}
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot)
//     {
//       const currentuser = this.authservice.currentuserValue;
//       if(currentuser)
//       {
//         return true;
//       }
//      this.router.navigate(['/Login'],{queryParams:{returnUrl: state.url}});
//      return false;
//     }
  
// }
