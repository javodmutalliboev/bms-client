import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  email = /^[\w\d]+@[\w\d]+\.[\w\d]+$/;
}
