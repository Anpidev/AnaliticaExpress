import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const InterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  const router = inject(Router);

  return next(req).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err.status === 403) {
        toastService.showToast('error', 'Error', 'No autorizado');
        router.navigateByUrl('');
      }
      return throwError(() => err);
    })
  );
};
