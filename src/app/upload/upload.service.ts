import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";
import { PublicService } from '../core/public-service.service';

@Injectable({
  providedIn: "root"
})
export class UploadService {
  constructor(private http: HttpClient,
    private _service:PublicService) {}

  // uploadUsers(users: any): Observable<any> {
  //   // debugger;
  //   return this.http.post<any>('http://localhost:85/api/account/bulkRegister', users);
  // }
  // uploadUsers(users: any){
  //   this._service.post(users,'account','bulkRegister').subscribe( res=>{
  //       console.log(res);
  //     },
  //     error =>{
  //     }
  //   );
  // }
}
