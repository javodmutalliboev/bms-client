import { Routes } from '@angular/router';
import { AdministratorComponent } from '../components/administrator/administrator.component';
import { authGuard } from '../guards/auth.guard';

export const routes: Routes = [
  {
    path: 'administrator',
    component: AdministratorComponent,
    canActivate: [authGuard],
  },
];
