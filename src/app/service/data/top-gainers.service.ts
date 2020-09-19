import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TopGainers } from '../../model/TopGainers';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TopGainersService {

  constructor(private http: HttpClient) { }

  getGainers(): Observable<TopGainers[]> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'content-type',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'
    });
    return this.http.get<TopGainers[]>(`https://hackathon-stock-api-v1.azurewebsites.net/gainer`, { headers });
  }

}
