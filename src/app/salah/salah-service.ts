import { environment } from './../../environments/environment';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SalahService {

  private baseUrl = environment.baseUrl;
  private salahUrl = environment.salahUrl;

  constructor(private _http: HttpClient) { }

  getSalah(day: number, month: number) {
    const url = this.baseUrl + this.salahUrl + '/' + day + '/' + month + '/' + 4;
    return this._http.get(url);
  }
}