import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-api',
  imports: [FormsModule],
  templateUrl: './delete-api.component.html',
  styleUrl: './delete-api.component.css',
})
export class DeleteApiComponent {
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

  //Delete Api
  onDeleteCar(carId: number) {
    const data = this.http.delete(
      `https://freeapi.miniprojectideas.com/api/CarRentalApp/DeleteCarbyCarId?carid=${carId}`
    );
    const isDelete = confirm('Are you sure you want to delete this car?');
    if (isDelete) {
      data.subscribe((res: any) => {
        if (res.result) {
          alert('Car deleted successfully');
          this.getAllCar();
        } else {
          alert(res.message);
        }
      });
    }
  }
}
