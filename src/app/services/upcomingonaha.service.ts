import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Upcomingonaha } from '../models/upcomingonaha';

@Injectable({
  providedIn: 'root'
})
export class UpcomingonahaService {
  private baseurl="assets/upcomingonaha.json";
    private baseurl1="http://localhost:8081/api/v1/upcomingonaha";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Upcomingonaha[]>{
      return this.http.get<Upcomingonaha[]>(this.baseurl);
    }
}
