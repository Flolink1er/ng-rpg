import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { CreateCharacterPage } from './pages/create-character-page/create-character-page';
import { MapPage } from './pages/map-page/map-page';
import { CityPage } from './pages/city-page/city-page';
import { InventoryPage } from './pages/inventory-page/inventory-page';
import { userSelectedGuard } from './guards/user-selected-guard';
import { userNotDisconnectedGuard } from './guards/user-not-disconnected-guard';
import { FightPage } from './pages/fight-page/fight-page';

export const routes: Routes = [
  { path: 'landing', component: LandingPage, canActivate: [userNotDisconnectedGuard] },
  {
    path: 'create-character',
    component: CreateCharacterPage,
    canActivate: [userNotDisconnectedGuard],
  },
  { path: 'map', component: MapPage, canActivate: [userSelectedGuard] },
  { path: 'city', component: CityPage, canActivate: [userSelectedGuard] },
  { path: 'inventory', component: InventoryPage, canActivate: [userSelectedGuard] },
  { path: 'fight/:zone', component: FightPage, canActivate: [userSelectedGuard] },
  { path: '**', redirectTo: 'landing' },
];
