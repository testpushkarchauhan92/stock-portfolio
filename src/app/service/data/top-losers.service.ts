import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopLosers } from '../../model/TopLosers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopLosersService {

  constructor(private http: HttpClient) { }

  getLosers(): Observable<TopLosers[]> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'content-type',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'
    });
    return this.http.get<TopLosers[]>(`https://hackathon-stock-api-v1.azurewebsites.net/looser`, { headers });
  }

}
