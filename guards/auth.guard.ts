import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../app/services/auth.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      this.authService.getAuth().onAuthStateChanged(user => {
        if (!user) this.router.navigate(['login']);

        resolve(user ? true : false);
      });
    });
  }

}
