import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  // users: User[] = [
  //   {
  //     id: 1,
  //     fullName: 'Osama',
  //     email: 'osama@gmail.com',
  //     department: 'IT',
  //     lastSection: 'Organisation'
  //   },
  //   {
  //     id: 2,
  //     fullName: 'Osama',
  //     email: 'osama@gmail.com',
  //     department: 'IT',
  //     lastSection: 'Organisation'
  //   },
  //   {
  //     id: 3,
  //     fullName: 'Osama',
  //     email: 'osama@gmail.com',
  //     department: 'IT',
  //     lastSection: 'Organisation'
  //   },
  // ];


  users: User[] = [];


  constructor(private userService: UsersService) { }

  ngOnInit(): Observable<any> {
    this .users  = this.userService.getUsers();
  }


}
