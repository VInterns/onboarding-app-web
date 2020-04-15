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
import { MatStepperModule, MatFormField, MatSortModule, MatPaginatorModule, MatGridListModule } from '@angular/material';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBar, MatSnackBarModule } from '@angular/material';
import { SnackBarComponent } from './shared/navbar/snack-bar/snack-bar.component';
import { SurveyRatingCardsComponent } from './surveyCards/survey-rating-cards/survey-rating-cards.component';
import {MatCardModule} from '@angular/material/card';
import { StarRatingComponent } from './shared/navbar/star-rating/star-rating.component';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    ListUsersComponent,
    LoginComponent,
    NavbarComponent,
    SnackBarComponent,
    SurveyRatingCardsComponent,
    StarRatingComponent,
  ],
  imports: [MatIconModule,
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
    MatSnackBarModule,
    MatCardModule,
    MatPaginatorModule,
    MatSelectModule,
    MatSortModule
    // MatSelectModule,
    // MatFormField,
    //  MatSortModule,
  ],
  providers: [
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
