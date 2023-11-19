import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UsersComponent } from './components/users/users.component';

@NgModule({
  declarations: [HomeComponent, UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ContentModule {}
