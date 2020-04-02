import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from './users.service';
import { Observable } from 'rxjs';
import { PublicService } from '../core/public-service.service';



@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {


  users: any;


  constructor(private userService: UsersService, private publicService:PublicService) { }

  ngOnInit() {
      // this.userService.getUsers().subscribe(data => {
      //   this.users = data;
      //   console.log(this.users);
      // });

      this.publicService.getAll('account','users').subscribe(data =>{
        this.users = data;
        console.log(this.users);
      })
    // usersResponce.
  }


}
