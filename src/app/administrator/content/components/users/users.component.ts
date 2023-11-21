import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  constructor(
    private httpClient: HttpClient,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.httpClient
      .get(`${environment.apiUrl}/administrator/users`, {
        withCredentials: true,
      })
      .subscribe({
        next: (response) => {
          console.log(response);
        },
        error: (error) => {
          console.log(error);
          this.toastrService.error('An error occurred', '', {
            disableTimeOut: true,
          });
        },
      });
  }
}
