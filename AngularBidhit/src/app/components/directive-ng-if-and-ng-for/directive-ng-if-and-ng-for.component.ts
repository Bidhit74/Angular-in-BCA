import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directive-ng-if-and-ng-for',
  imports: [NgIf, FormsModule],
  templateUrl: './directive-ng-if-and-ng-for.component.html',
  styleUrl: './directive-ng-if-and-ng-for.component.css',
})
export class DirectiveNgIfAndNgForComponent {
  divVisible: boolean = true;
  number1: string = '';
  number2: string = '';
  showDiv() {
    this.divVisible = true;
  }
  hideDiv() {
    this.divVisible = false;
  }
}
