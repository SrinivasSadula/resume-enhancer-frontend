import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnhancerComponent } from './enhancer/enhancer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'enhancer', component: EnhancerComponent }
];