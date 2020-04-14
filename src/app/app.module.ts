import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListUsersComponent } from './users/list-users.component';
import { UsersService } from './users/users.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatStepperModule, MatFormField, MatSortModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatPaginatorModule, MatGridListModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { SnackBarComponent } from './shared/navbar/snack-bar/snack-bar.component';
import { RatingCountComponent } from './rating-count/rating-count.component';
@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ListUsersComponent,
    LoginComponent,
    NavbarComponent,
    SnackBarComponent,
    RatingCountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSnackBarModule
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
