import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  // inside create the variables only.
  firstName: string = 'Bidhit';
  lastName: string = 'Chaudhary';
  age: number = 22;
  myPleceholder: string = 'Enter your name';
  myStyleDiv: string = 'bg-primary rounded-pill';
  slectedCity: string = '';

  constructor() {
    console.log(this.firstName);
  }

  // create the functions here
  showWelcomeMessage() {
    alert('Welcome to Bidhit Ji');
  }
  onCityChanged() {
    alert('City changed');
  }
}
