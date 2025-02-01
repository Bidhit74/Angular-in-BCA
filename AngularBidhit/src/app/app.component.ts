import { Component } from '@angular/core';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
@Component({
  selector: 'app-root',
  imports: [AttributeDirectiveComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBidhit';
}
