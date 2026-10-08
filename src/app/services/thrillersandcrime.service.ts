import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Thrillersandcrime } from '../models/thrillersandcrime';

@Injectable({
  providedIn: 'root'
})
export class ThrillersandcrimeService {
  private baseurl="assets/thrillersandcrime.json";
    private baseurl1="http://localhost:8081/api/v1/thrillersandcrime";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Thrillersandcrime[]>{
      return this.http.get<Thrillersandcrime[]>(this.baseurl);
    }
}
