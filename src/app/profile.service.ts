import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  contactus(data: any): Observable<any> {
    const headers = {
      Accept: 'application/json, text/plain, */*',
      /*ContentType: 'application/json',*/
      'Access-Control-Allow-Origin': '*',
      //Referer: ' '
    };
    return this.http.post(this.baseUrl + '/process', data, {headers, observe: 'response'});
  }
}
