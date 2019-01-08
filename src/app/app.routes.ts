import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MiscelaneosComponent } from './components/miscelaneos/miscelaneos.component';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'misce', component: MiscelaneosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
