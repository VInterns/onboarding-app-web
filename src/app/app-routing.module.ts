import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {UploadComponent} from './upload/upload.component'


const routes: Routes = [
  // {path:'',component:TestComponent},

 {path:'upload/users',component:UploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
