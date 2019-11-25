import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  private listUsers: User[] = [{
    id: 1,
    fullName: 'Osama',
    email: 'osama@gmail.com',
    department: 'IT',
    lastSection: 'Organisation'
  },
  {
    id: 2,
    fullName: 'Hager',
    email: 'hager@gmail.com',
    department: 'IT',
    lastSection: 'Brand'
  },
  {
    id: 3,
    fullName: 'Arya',
    email: 'arya@gmail.com',
    department: 'HR',
    lastSection: 'Health And Safety'
  },
  ];

  getUsers(): Observable<any> {
    // return this.listUsers;
    return this.http.get<any>('http://localhost:85/api/account/users');
  }

}
