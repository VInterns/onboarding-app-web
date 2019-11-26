import { Injectable } from '@angular/core';
import { Observable ,throwError} from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User> {
    // return this.listUsers;
    return this.http.get<User>('http://localhost:85/api/account/users').pipe(
      retry(1),
    catchError(this.errorHandl));
  }


  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
 }

}
