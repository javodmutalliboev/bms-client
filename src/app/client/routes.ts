import { Routes } from '@angular/router';
import { administratorGuard } from '../guards/administrator.guard';

export const routes: Routes = [
  {
    path: 'administrator',
    canActivate: [administratorGuard],
    loadChildren: () =>
      import('../administrator/administrator.module').then(
        (m) => m.AdministratorModule
      ),
  },
];
