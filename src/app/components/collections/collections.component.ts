import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent implements OnInit {
  constructor(private cookieService: CookieService) {}

  ngOnInit(): void {
    console.log(JSON.parse(this.cookieService.get('user')));
  }
}
