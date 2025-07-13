import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmailComponent } from './email/email.component';
import { OtpComponent } from './otp/otp.component'; // Ensure this is uncommented when you add the OtpComponent
// import { OtpComponent } from './otp/otp.component'; // If you add this later

const routes: Routes = [
  // When a user navigates to /login, they will be redirected to /login/email
  {
    path: '', 
    redirectTo: 'email',
    pathMatch: 'full'
  },
  {
    path: 'email',
    component: EmailComponent
  },
  {
    path: 'otp',
    component: OtpComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }