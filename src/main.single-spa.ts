import { singleSpaAngular, getSingleSpaExtraProviders } from 'single-spa-angular';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { NgZone } from '@angular/core';

const lifecycles = singleSpaAngular({
  bootstrapFunction: () =>
    bootstrapApplication(AppComponent, {
      providers: [
        provideRouter(routes),
        ...getSingleSpaExtraProviders(),
      ],
    }),
  template: '<app-root />',
  NgZone
});

export const { bootstrap, mount, unmount } = lifecycles;