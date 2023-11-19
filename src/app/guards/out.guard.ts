import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const outGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  if (authService.loggedIn()) {
    if (authService.administrator()) {
      router.navigate(['client', 'administrator']);
    }
    return false;
  }

  return true;
};
