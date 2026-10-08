import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comedytime } from '../models/comedytime';

@Injectable({
  providedIn: 'root'
})
export class ComedytimeService {
  private baseurl="assets/comedytime.json";
    private baseurl1="http://localhost:8081/api/v1/comedytime";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Comedytime[]>{
      return this.http.get<Comedytime[]>(this.baseurl);
    }
}
