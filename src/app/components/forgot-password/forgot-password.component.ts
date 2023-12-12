import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent {
  pattern = /^[\w\d]+@[\w\d]+\.[\w\d]+$/;

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
  }
}
