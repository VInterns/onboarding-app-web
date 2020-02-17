import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UploadComponent} from './upload/upload.component';
import {ListUsersComponent} from './users/list-users.component';
import {LoginComponent} from './login/login.component';


const routes: Routes = [
  // {path:'',component:TestComponent},
{path:'',component:LoginComponent},
 {path: 'upload/users', component: UploadComponent},
 {path: 'users/list-users', component : ListUsersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
