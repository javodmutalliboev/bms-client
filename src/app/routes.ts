import { Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { LoginComponent } from './components/login/login.component';
import { outGuard } from './guards/out.guard';
import { CollectionsComponent } from './components/collections/collections.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: EntranceComponent,
    canActivate: [outGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [outGuard],
  },
  {
    path: 'collections',
    component: CollectionsComponent,
    canActivate: [authGuard],
  },

  {
    path: '**',
    component: EntranceComponent,
    canActivate: [outGuard],
  },
];
