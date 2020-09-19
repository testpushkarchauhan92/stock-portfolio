import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Stock } from '../../model/Stock';
import { Observable } from 'rxjs';
import { API_URL } from '../../app.constants';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private http: HttpClient) { }

  // Get All Stocks
  getStock(): Observable<Stock[]> {
    let headers = new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'content-type',
      'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, PATCH, OPTIONS'
    });
    return this.http.get<Stock[]>(`${API_URL}/stock`, { headers });
  }
}
