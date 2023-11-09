import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private cookieService: CookieService) {}
  title = 'bms-client';

  ngOnInit(): void {}

  get user(): User {
    return JSON.parse(this.cookieService.get('user'));
  }
}
