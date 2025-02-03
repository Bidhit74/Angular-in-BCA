import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Customer {
  customerId: number;
  customerName: string;
  customerCity: string;
  mobileNo: string;
  email: string;
}

@Component({
  selector: 'app-customers-profile',
  imports: [FormsModule, NgFor],
  templateUrl: './customers-profile.component.html',
  styleUrl: './customers-profile.component.css',
})
export class CustomersProfileComponent {
  customersObj: Customer = {
    customerId: 0,
    customerName: '',
    customerCity: '',
    mobileNo: '',
    email: '',
  };
  customersArray: Customer[] = [];
  constructor(private http: HttpClient) {
    this.getCustomerDetails();
  }
  getCustomerDetails() {
    this.http
      .get<{ data: Customer[] }>(
        'https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCustomers'
      )
      .subscribe((response) => {
        this.customersArray = response.data;
      });
  }
}
