import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import {
  HttpClient,
  HttpHeaders,
  HttpClientModule
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadUsers(users: any): Observable<any> {
    // debugger;
    return this.http.post<any>("api/account/bulkRegister", users);
  }
}
