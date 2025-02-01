import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DirectiveNgIfAndNgForComponent } from './components/directive-ng-if-and-ng-for/directive-ng-if-and-ng-for.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  }, // Default route
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'home',
    component: UserComponent,
  },
  {
    path: 'dataBinding',
    component: DataBindingComponent,
  },
  {
    path: 'attributeDirective',
    component: AttributeDirectiveComponent,
  },
  {
    path: 'directiveNgIfNgFor',
    component: DirectiveNgIfAndNgForComponent,
  },
];
