import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import './app/services/mock-backend';
import { isDevMode } from '@angular/core';
// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err),
// );
async function prepareApp() {
  const { worker } = await import('./app/services/mock-backend');
  return worker.start();
}

prepareApp().then(() => {
  console.log('Mock backend started');
  bootstrapApplication(AppComponent, appConfig);
});
