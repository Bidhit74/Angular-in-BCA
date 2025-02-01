import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.component.html',
  styleUrl: './signal.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  firstName = signal('Bidhit'); // week signal --> data type is not defined

  lastName = signal<string>('Chaudhary'); // strong signal --> data type is defined
  courseName: string = 'Angular-19';
  constructor() {
    const value = this.firstName();
    console.log(value);
    setTimeout(() => {
      this.courseName = 'React Js';
      this.lastName.set('Kumar'); // signal value changed ui update
    }, 5000);
  }
}
