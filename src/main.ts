import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import localeFrBe from '@angular/common/locales/fr-BE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeFrBe);
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
