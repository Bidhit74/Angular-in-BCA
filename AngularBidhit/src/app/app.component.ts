import { Component } from '@angular/core';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { SinglePageComponent } from './components/single-page/single-page.component';

@Component({
  selector: 'app-root',
  imports: [AdminComponent, UserComponent, SinglePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AngularBidhit';
}
