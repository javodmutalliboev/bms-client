import { Routes } from '@angular/router';
import { administratorGuard } from 'src/app/guards/administrator.guard';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [administratorGuard],
  },
  {
    path: 'users',
    component: UsersComponent,
    canActivate: [administratorGuard],
  },
];
