import { Injectable } from '@angular/core';

import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private cookieService: CookieService) {}

  loggedIn(): boolean {
    if (this.cookieService.get('user')) {
      return true;
    }
    return false;
  }

  administrator(): boolean {
    if (this.cookieService.get('user')) {
      const user = JSON.parse(this.cookieService.get('user'));
      if (user.role === 'administrator') {
        return true;
      }
    }
    return false;
  }
}
