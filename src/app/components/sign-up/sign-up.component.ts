import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  onSubmit(form: NgForm) {
    console.log(form);
  }

  pattern = /^[\w\d]+@[\w\d]+\.[\w\d]+$/;

  constructor(
    private httpClient: HttpClient,
    private toastService: ToastrService
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
}
