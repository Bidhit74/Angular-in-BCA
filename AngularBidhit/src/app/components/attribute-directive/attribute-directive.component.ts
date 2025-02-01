import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directive',
  imports: [NgClass, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  stuDivClassName: string = 'bg-secondary text-white';
  empDivClassName: string = '';
  productClass: string = '';
  isOrderActive: boolean = false;

  addProductClass(product: string) {
    if (product == 'green') {
      this.productClass = 'bg-success';
    } else if (product == 'red') {
      this.productClass = 'bg-danger';
    }
  }
}
