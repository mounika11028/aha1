import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trendingnow } from '../models/trendingnow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingnowService {
  private baseurl="assets/trendingnow.json";
   private baseurl1="http://localhost:8081/api/v1/trendingnow";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Trendingnow[]>{
      return this.http.get<Trendingnow[]>(this.baseurl);
    }
}
