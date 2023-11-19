import { Routes } from '@angular/router';
import { EntranceComponent } from './components/entrance/entrance.component';
import { LoginComponent } from './components/login/login.component';
import { outGuard } from './guards/out.guard';
import { authGuard } from './guards/auth.guard';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ParentComponent } from './components/parent/parent.component';

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
    path: 'signup',
    component: SignUpComponent,
    canActivate: [outGuard],
  },
  {
    path: 'client',
    component: ParentComponent,
    canActivate: [authGuard],
    loadChildren: () =>
      import('./administrator/administrator.module').then(
        (m) => m.AdministratorModule
      ),
  },

  {
    path: '**',
    component: EntranceComponent,
    canActivate: [outGuard],
  },
];
