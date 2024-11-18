import { Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'sign-in',
  },
  {
    component: SignInComponent,
    path: 'sign-in',
  },
];
