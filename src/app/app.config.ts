import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routerConfig } from './routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { loggingInterceptor } from './shared/interceptors/loggingInterceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routerConfig),
    provideHttpClient(withInterceptors([loggingInterceptor])),
  ],
};
