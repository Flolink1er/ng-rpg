import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { CreateCharacterPage } from './pages/create-character-page/create-character-page';

export const routes: Routes = [
  { path: 'landing', component: LandingPage },
  { path: 'create-character', component: CreateCharacterPage },
  { path: '**', redirectTo: 'landing' },
];
