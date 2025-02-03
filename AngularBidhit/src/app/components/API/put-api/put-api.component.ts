import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-put-api',
  imports: [FormsModule],
  templateUrl: './put-api.component.html',
  styleUrl: './put-api.component.css',
})
export class PutApiComponent {
  http = inject(HttpClient);
  carList: any[] = [];
  carObj: any = {
    carId: 0,
    brand: '',
    model: '',
    year: 0,
    color: '',
    dailyRate: 0,
    carImage: '',
    regNo: '',
  };
  getAllCar() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/CarRentalApp/GetCars')
      .subscribe((res: any) => {
        this.carList = res.data;
      });
  }
  constructor() {
    this.getAllCar();
  }
  saveCar() {
    const data = this.http.post(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/CreateNewCar',
      this.carObj
    );
    data.subscribe((res: any) => {
      if (res.result) {
        alert('Car added successfully');
        this.getAllCar();
      } else {
        alert(res.message);
      }
    });
  }
  resetForm() {
    this.carObj = {
      carId: 0,
      brand: '',
      model: '',
      year: 0,
      color: '',
      dailyRate: 0,
      carImage: '',
      regNo: '',
    };
  }

  onEdit(data: any) {
    this.carObj = data;
  }
  //Put Api
  updateCar() {
    const data = this.http.put(
      'https://freeapi.miniprojectideas.com/api/CarRentalApp/UpdateCar',
      this.carObj
    );
    data.subscribe((res: any) => {
      if (res.result) {
        alert('Car updated successfully');
        this.getAllCar();
      } else {
        alert(res.message);
      }
    });
  }
}
