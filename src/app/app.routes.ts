import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Enhancer } from './enhancer/enhancer';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'enhancer', component: Enhancer }
];
