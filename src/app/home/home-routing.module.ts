import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { FunctionListComponent } from './dashboard/function-list/function-list.component';
import { FunctionFormComponent } from './dashboard/function-form/function-form.component';
import { AddAttributesFormComponent } from './dashboard/add-attributes-form/add-attributes-form.component';
import { FunctionApprovalComponent } from './dashboard/function-approval/function-approval.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardHomeComponent },  
      { path: 'function', component: FunctionListComponent }, 
      { path: 'function/add', component: FunctionFormComponent }, 
      { path: 'function/attributes', component: AddAttributesFormComponent },
      {path: 'function/approval', component: FunctionApprovalComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }