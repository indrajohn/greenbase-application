import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { EmailConfirmationComponent } from './email-confirmation/email-confirmation.component';
import { RegistrationCompleteComponent } from './registration-complete/registration-complete.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'email-confirmation', component: EmailConfirmationComponent },
  { path: 'registration-complete', component: RegistrationCompleteComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard/:menu', component: DashboardComponent },
  { path: '**', redirectTo: '' },
];
