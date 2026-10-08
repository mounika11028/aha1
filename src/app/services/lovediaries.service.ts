import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lovediaries } from '../models/lovediaries';

@Injectable({
  providedIn: 'root'
})
export class LovediariesService {
  private baseurl="assets/lovediaries.json";
    private baseurl1="http://localhost:8081/api/v1/lovediaries";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Lovediaries[]>{
      return this.http.get<Lovediaries[]>(this.baseurl);
    }
}
