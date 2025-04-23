import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {MessageService} from 'primeng/api';
import {InterceptorInterceptor} from './interceptors/interceptor.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  MessageService,
    provideRouter(routes),provideHttpClient(withInterceptors([InterceptorInterceptor])),
  ]
};
