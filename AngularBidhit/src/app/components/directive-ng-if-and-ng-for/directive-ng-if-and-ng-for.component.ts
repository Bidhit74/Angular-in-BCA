import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-ng-if-and-ng-for',
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './directive-ng-if-and-ng-for.component.html',
  styleUrl: './directive-ng-if-and-ng-for.component.css',
})
export class DirectiveNgIfAndNgForComponent {
  divVisible: boolean = true;
  number1: string = '';
  number2: string = '';

  cityList: string[] = [
    'Pune',
    'Mumbai',
    'Jaipur',
    'Nagpur',
    'Thane',
    'Nashik',
  ];

  employeesList = [
    {
      id: 121,
      name: 'Alice',
      age: 28,
      department: 'HR',
      skills: ['Communication', 'Recruitment'],
    },
    {
      id: 122,
      name: 'Bob',
      age: 32,
      department: 'IT',
      skills: ['JavaScript', 'React', 'Node.js'],
    },
    {
      id: 123,
      name: 'Charlie',
      age: 26,
      department: 'Finance',
      skills: ['Excel', 'Accounting', 'Budgeting'],
    },
    {
      id: 124,
      name: 'David',
      age: 30,
      department: 'Marketing',
      skills: ['SEO', 'Content Writing', 'Social Media'],
    },
    {
      id: 125,
      name: 'Emma',
      age: 27,
      department: 'Sales',
      skills: ['Negotiation', 'CRM', 'Customer Service'],
    },
  ];
  showDiv() {
    this.divVisible = true;
  }
  hideDiv() {
    this.divVisible = false;
  }
}
