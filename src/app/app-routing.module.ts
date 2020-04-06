import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UploadComponent } from './upload/upload.component';
import { ListUsersComponent } from './users/list-users.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
const routes: Routes = [
  // {path:'',component:TestComponent},
  { path: 'login', component: LoginComponent },
  { path: 'upload/users', component: UploadComponent },
  { path: 'users/list-users', component: ListUsersComponent },
  { path: 'Navbar', component: NavbarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
