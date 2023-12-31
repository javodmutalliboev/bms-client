import { Routes } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { administratorGuard } from '../guards/administrator.guard';

export const routes: Routes = [
  {
    path: '',
    component: AdministratorComponent,
    canActivate: [administratorGuard],
    loadChildren: () =>
      import('./content/content.module').then((m) => m.ContentModule),
  },
];
