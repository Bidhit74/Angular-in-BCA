import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  userList: any[] = [];
  constructor(private http: HttpClient) {}
  getData() {
    const data = this.http.get('https://jsonplaceholder.typicode.com/users');
    data.subscribe((results: any) => {
      this.userList = results;
    });
  }
}
