import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgIf],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  userForm: any = {
    fName: '',
    lName: '',
    userName: '',
    city: '',
    state: '',
    zipCode: '',
    isActive: false,
  };

  getInputValue() {
    console.log(this.userForm);
  }
}
