import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home';
import { AdminComponent } from './components/admin/admin';
import { WalletComponent } from './components/wallet/wallet';
import { ToursComponent } from './components/tours/tours';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'tours', component: ToursComponent },
  { path: '**', redirectTo: '' }
];
