import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { PublicService } from 'src/app/core/public-service.service';
import { User } from 'src/app/models/user.model';
import { Observable } from 'rxjs';
import { MatTableDataSource, MatPaginator, MatSort, Sort } from '@angular/material';
import { async } from '@angular/core/testing';
 
export class sortModel{
  value:string;
  name:string;
}


@Component({
  selector: 'app-survey-rating-cards',
  templateUrl: './survey-rating-cards.component.html',
  styleUrls: ['./survey-rating-cards.component.css']
})

export class SurveyRatingCardsComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  obs: Observable<User[]>;
  dataSource: MatTableDataSource<User>;
  rating:number = 3;
  starCount:number = 5;
  users: User[];
  sortList:sortModel[]=[
   {name: "Latest",value:"commentedOn" },
   {name: "Lowest",value:"useful" },
   {name: "Highest",value:"enggaging" }]

  constructor(private publicService:PublicService,
    private changeDetectorRef: ChangeDetectorRef) { 
    this.dataSource = new MatTableDataSource<User>();
  }

  ngOnInit(): void {
  this.getAllSurveyList();
  }

  
  getAllSurveyList(){
    this.publicService.getAll('survey','list').subscribe(res =>{
      this.users = res;
      console.log( this.users);
      
      this.fillDataSource(res);
    });
    
  }

  fillDataSource(data:User[]){
    this.dataSource.data = data;
    this.changeDetectorRef.detectChanges();
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.obs = this.dataSource.connect();
  }

  changeSortedColumn(column: string) {
    debugger
    let sortState: Sort = { active: column, direction: 'asc' };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

}
