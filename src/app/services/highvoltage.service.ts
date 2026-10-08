import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Highvoltage } from '../models/highvoltage';

@Injectable({
  providedIn: 'root'
})
export class HighvoltageService {
  private baseurl="assets/highvoltage.json";
    private baseurl1="http://localhost:8081/api/v1/highvoltage";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Highvoltage[]>{
      return this.http.get<Highvoltage[]>(this.baseurl);
    }
}
