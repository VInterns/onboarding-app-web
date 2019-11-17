import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{HttpClient,HttpHeaders,HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor( private http:HttpClient) { }

  // getAllEmps():Observable<any[]>{
  //   return this.http.post<any[]>(this.baseUrl+'Users', users);
  // };


  uploadUsers(users:any):Observable<any>{
    debugger;
    return this.http.post<any>('http://localhost:85/api/account/bulkRegister',users);
  };
  
}
