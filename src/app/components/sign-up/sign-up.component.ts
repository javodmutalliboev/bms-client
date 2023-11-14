import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.sendEmail(form.value.email);
  }

  pattern = /^[\w\d]+@[\w\d]+\.[\w\d]+$/;
  passwordPattern = /^\w{8,}$/;

  constructor(
    private httpClient: HttpClient,
    private toastService: ToastrService,
    private cookieService: CookieService,
    private router: Router
  ) {}

  euList: string[] = [];

  emailExists(email: string) {
    return this.euList.find((e) => e === email);
  }

  gettingEuList = false;
  ngOnInit(): void {
    this.gettingEuList = true;
    this.httpClient.get<string[]>(`${environment.apiUrl}/euList`).subscribe({
      next: (list) => {
        this.gettingEuList = false;
        this.euList = list;
      },
      error: (err) => {
        this.gettingEuList = false;
        this.toastService.error('An error occurred', '', {
          disableTimeOut: true,
        });
      },
    });
  }

  get sentEmail() {
    return this.cookieService.get('mailSent');
  }

  get emailVerified() {
    return this.cookieService.get('emailVerified');
  }

  sendingEmail = false;
  sendEmail(email: string) {
    this.sendingEmail = true;
    this.httpClient
      .post(
        `${environment.apiUrl}/sendEmail`,
        { email },
        { withCredentials: true }
      )
      .subscribe({
        next: (response) => {
          this.sendingEmail = false;
          this.toastService.success('Email sent', '');
          this.cookieService.set(
            'mailSent',
            'true',
            new Date(new Date().getTime() + 3600000),
            '/',
            `${environment.domain}`,
            environment.https,
            'Strict'
          );
        },
        error: (err) => {
          this.sendingEmail = false;
          this.toastService.error('An error occurred', '', {
            disableTimeOut: true,
          });
        },
      });
  }

  verificationCodeSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.verifyCode(form.value.code);
  }

  submitting = false;
  verifyCode(code: number) {
    this.submitting = true;
    this.httpClient
      .post(
        `${environment.apiUrl}/verifyCode`,
        { code },
        { withCredentials: true }
      )
      .subscribe({
        next: (response) => {
          this.submitting = false;
          this.cookieService.delete('mailSent');
          this.cookieService.set(
            'emailVerified',
            'true',
            new Date(new Date().getTime() + 3600000),
            '/',
            `${environment.domain}`,
            environment.https,
            'Strict'
          );
        },
        error: (err) => {
          this.submitting = false;
          this.toastService.error('An error occurred', '', {
            disableTimeOut: true,
          });
        },
      });
  }

  submitPassword(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.submitting = true;
    this.httpClient
      .post(
        `${environment.apiUrl}/submitPassword`,
        { password: form.value.password },
        { withCredentials: true }
      )
      .subscribe({
        next: (response) => {
          this.submitting = false;
          this.cookieService.delete('emailVerified');
          this.toastService.success('Password set', '', {
            disableTimeOut: true,
          });
          this.router.navigate(['login']);
        },
        error: (err) => {
          this.submitting = false;
          this.toastService.error('An error occurred', '', {
            disableTimeOut: true,
          });
        },
      });
  }
}
