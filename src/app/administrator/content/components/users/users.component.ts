import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';
import { User } from '../../models/user.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

  loading = false;
  ngOnInit(): void {
    this.loading = true;
    this.httpClient
      .get<{ users: User[] }>(`${environment.apiUrl}/administrator/users`, {
        withCredentials: true,
      })
      .subscribe({
        next: (response) => {
          this.loading = false;
          this.dataSource = new MatTableDataSource<User>(response.users);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (error) => {
          this.loading = false;
          this.toastrService.error('An error occurred', '', {
            disableTimeOut: true,
          });
        },
      });
  }

  dataSource = new MatTableDataSource<User>();
  displayedColumns: string[] = [
    'email',
    'first_name',
    'last_name',
    'role',
    'actions',
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
