import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Trendingnow } from '../models/trendingnow';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TrendingnowService {
  private baseurl="http://localhost:8081/api/v1/trendingnowdata";
  constructor(private http:HttpClient) {}
  onsubmit():Observable<Trendingnow[]>{
    return this.http.get<Trendingnow[]>(this.baseurl);
  }
}
