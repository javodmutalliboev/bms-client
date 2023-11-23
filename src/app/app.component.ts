import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from './models/user.model';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private cookieService: CookieService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {}
  title = 'bms-client';
  user!: User;
  ngOnInit(): void {}

  userAssign() {
    if (this.authService.loggedIn()) {
      const stringUser: string = this.cookieService.get('user');
      this.user = stringUser ? JSON.parse(stringUser) : null!;
      this.cdr.detectChanges();
    } else {
      this.user = null!;
      this.cdr.detectChanges();
    }
  }
}
