import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicService{

  constructor(private http: HttpClient) { }

    // get all
    getAll(apiController: string): Observable<any[]> {
      return this.http.get<any[]>(environment.serverUrl + apiController,
        // { headers: { Authorization: "Bearer " + localStorage.getItem("Token") } }
      );
    }

    // add
    post(data: any, apiController: string, action?: string): Observable<any> {
      if (action) {
        return this.http.post<any>(
          environment.serverUrl + apiController + '/' + action, data);
      } else {
        return this.http.post<any>(environment.serverUrl + apiController, data);  
      }
    }
  
     // update
    put(data: any, apiController: string, action?: string): Observable<any> {
      return this.http.put<any>(
        environment.serverUrl + apiController + '/' + action, data);
    }
}
