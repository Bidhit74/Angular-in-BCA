import { Component } from '@angular/core';
import { DirectiveNgIfAndNgForComponent } from './components/directive-ng-if-and-ng-for/directive-ng-if-and-ng-for.component';

@Component({
  selector: 'app-root',
  imports: [DirectiveNgIfAndNgForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBidhit';
}
