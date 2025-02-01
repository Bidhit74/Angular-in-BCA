import {
  ChangeDetectionStrategy,
  Component,
  linkedSignal,
  signal,
} from '@angular/core';

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

  //Linked Signal in Angular - 19
  firstName1 = signal<string>('Binit');
  lastName1 = signal<string>('Chaudhary');

  fullName = linkedSignal({
    source: this.firstName1,
    computation: (newValue, oldValue) => {
      debugger;
      const fullName = newValue + ' ' + this.lastName1();
      return fullName;
    },
  });

  changeName() {
    this.firstName1.set('Navnit');
  }

  user = signal({ id: 121, name: 'Bidhit' });

  email = linkedSignal({
    source: this.user,
    computation: (user) => `${user.name + user.id}@gmail.com`,
    equal: (a: any, b: any) => a.id !== b.id,
  });

  changeId() {
    this.user.set({ id: 111, name: 'Bidhit' });
  }
}
