import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private httpClient: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    if (this.authService.administrator()) {
      this.router.navigate(['administrator'], { relativeTo: this.route });
    }
  }

  pending: boolean = false;
  logout() {
    this.pending = true;
    this.httpClient
      .get(`${environment.apiUrl}/logout`, {
        withCredentials: true,
      })
      .subscribe({
        next: (response) => {
          this.pending = false;
          this.router.navigate(['login']);
        },
        error: (error) => {
          this.pending = false;
          this.toastr.error('failed - an error occurred', 'Logout', {
            disableTimeOut: true,
          });
        },
      });
  }
}
