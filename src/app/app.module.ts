import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntranceComponent } from './components/entrance/entrance.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { routes } from './routes';
import { CookieService } from 'ngx-cookie-service';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { PendingComponent } from './components/pending/pending.component';
import { MatIconModule } from '@angular/material/icon';
import { ParentComponent } from './components/parent/parent.component';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { SubscriberComponent } from './components/subscriber/subscriber.component';

@NgModule({
  declarations: [
    AppComponent,
    EntranceComponent,
    LoginComponent,
    SignUpComponent,
    PendingComponent,
    ParentComponent,
    AdministratorComponent,
    SubscriberComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(routes),
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
