import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routes } from './routes';
import { RouterModule } from '@angular/router';
import { AdministratorComponent } from './components/administrator/administrator.component';

@NgModule({
  declarations: [AdministratorComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdministratorModule {}
