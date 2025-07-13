import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  // If the user is authenticated, allow access.
  if (authService.isAuthenticated()) {
    return true;
  }

  // If the user is NOT authenticated, redirect them to the login page.
  router.navigate(['/login']);
  return false;
};