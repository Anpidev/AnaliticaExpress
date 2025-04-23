// src/app/guards/role.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { catchError, map, take } from 'rxjs/operators';
import { of } from 'rxjs';

export const roleGuard = (rolesPermitidos: string[]): CanActivateFn => () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.getDetails().pipe(
    take(1),
    map((usuario) => {
      if (rolesPermitidos.includes(usuario.rol.nombre)) {
        return true;
      }
      return router.createUrlTree(['/']);
    }),
    catchError(() => of(router.createUrlTree(['/'])))
  );
};
