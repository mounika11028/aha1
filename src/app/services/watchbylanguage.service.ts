import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchbylanguage } from '../models/watchbylanguage';

@Injectable({
  providedIn: 'root'
})
export class WatchbylanguageService {
  private baseurl="assets/watchbylanguage.json";
    private baseurl1="http://localhost:8081/api/v1/watchbylanguage";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Watchbylanguage[]>{
      return this.http.get<Watchbylanguage[]>(this.baseurl);
    }
}
