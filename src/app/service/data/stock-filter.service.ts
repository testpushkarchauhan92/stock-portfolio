import { Injectable } from '@angular/core';
import { Stock } from '../../model/Stock';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockFilterService {

  constructor(private http: HttpClient) { }

  //
  getFilteredStock(startDate, endDate): Observable<Stock[]> {
    //return this.http.get<Stock[]>(`http://localhost:8080/stockfilter/start/2019-07-25/end/2020-07-30`);
    // return this.http.get<Stock[]>(`http://localhost:8080/stockfilter/start/${startDate}/end/${endDate}`);
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'content-type',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'
    });
    return this.http.get<Stock[]>(`http://localhost:8081/stockfilter/start/${startDate}/end/${endDate}`, { headers });
  }
}
