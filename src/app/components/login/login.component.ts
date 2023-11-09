import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment.development';
import { User } from '../../models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  loggingIn = false;
  onSubmit(loginForm: NgForm) {
    if (loginForm.invalid) {
      return;
    }

    this.login(loginForm.value);
  }

  login(body: User) {
    this.loggingIn = true;
    this.httpClient
      .post(`${environment.apiUrl}/login`, body, {
        withCredentials: true,
      })
      .subscribe({
        next: (response) => {
          this.loggingIn = false;
          this.router.navigate(['collections']);
        },
        error: (error) => {
          this.loggingIn = false;
          this.toastrService.error('failed - an error occurred', 'login', {
            progressBar: true,
            progressAnimation: 'decreasing',
          });
        },
      });
  }
}
