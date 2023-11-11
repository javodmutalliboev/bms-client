import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private cookieService: CookieService,
    private authService: AuthService
  ) {}
  title = 'bms-client';

  ngOnInit(): void {}

  get user(): User {
    if (this.authService.loggedIn()) {
      return JSON.parse(this.cookieService.get('user'));
    } else {
      return null!;
    }
  }
}
