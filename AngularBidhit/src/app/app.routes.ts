import { Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { AttributeDirectiveComponent } from './components/attribute-directive/attribute-directive.component';
import { DirectiveNgIfAndNgForComponent } from './components/directive-ng-if-and-ng-for/directive-ng-if-and-ng-for.component';
import { UserComponent } from './components/user/user.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { SignalComponent } from './components/signal/signal.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';

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
  {
    path: 'control-flow',
    component: ControlFlowComponent,
  },
  {
    path: 'signal',
    component: SignalComponent,
  },
  {
    path: 'template-form',
    component: TemplateFormComponent,
  },
  {
    path: 'reactive-form',
    component: ReactiveFormComponent,
  },
];
