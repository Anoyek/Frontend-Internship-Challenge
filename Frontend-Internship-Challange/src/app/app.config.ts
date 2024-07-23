import { ApplicationConfig, importProvidersFrom } from '@angular/core';
// import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideClientHydration, BrowserModule } from '@angular/platform-browser';
import { provideAnimations, BrowserAnimationsModule } from '@angular/platform-browser/animations';

const rootModules = [
  BrowserModule,
  BrowserAnimationsModule
];


export const appConfig: ApplicationConfig = {
  providers: [provideClientHydration(), provideHttpClient(), provideAnimations(), importProvidersFrom(...rootModules)]
// provideRouter(routes)
};
