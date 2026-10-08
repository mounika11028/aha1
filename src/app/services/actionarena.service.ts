import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actionarena } from '../models/actionarena';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionarenaService {
  private baseurl="assets/actionarena.json";
    private baseurl1="http://localhost:8081/api/v1/actionarena";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Actionarena[]>{
      return this.http.get<Actionarena[]>(this.baseurl);
    }
}
