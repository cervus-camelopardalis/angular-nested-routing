import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './user/forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainProfileComponent } from './user/profile/main/main-profile.component';
import { MyProfileComponent } from './user/profile/my-profile/my-profile.component';
import { EditProfileComponent } from './user/profile/edit-profile/edit-profile.component';
import { SettingsProfileComponent } from './user/profile/settings-profile/settings-profile.component';
import { DeleteProfileComponent } from './user/profile/delete-profile/delete-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'sign-up-successful', component: SignInComponent },
  { path: 'already-signed-up', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign-in-successful', component: DashboardComponent },
  { path: 'sign-out-successful', component: DashboardComponent },
  { path: 'profile', component: MainProfileComponent,
    children: [
      { path: 'my-profile', component: MyProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'settings', component: SettingsProfileComponent },
      { path: 'delete-profile', component: DeleteProfileComponent }
    ]
  },
  { path: '**', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const RoutingComponents = [
  SignInComponent,
  SignUpComponent,
  ForgotPasswordComponent,
  DashboardComponent,
  MainProfileComponent,
  MyProfileComponent,
  EditProfileComponent,
  SettingsProfileComponent,
  DeleteProfileComponent
]
