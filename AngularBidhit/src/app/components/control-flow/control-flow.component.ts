import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  div1Visible: boolean = true;
  isChecked: boolean = false;
  dayName: string = '';

  showHideDiv(isShow: boolean) {
    this.div1Visible = isShow;
  }

  citylist: string[] = ['New York', 'Delhi', 'San Francisco', 'Madhubani'];
}
