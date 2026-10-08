import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heartfeltdrama } from '../models/heartfeltdrama';

@Injectable({
  providedIn: 'root'
})
export class HeartfeltdramaService {
  private baseurl="assets/heartfeltdrama.json";
    private baseurl1="http://localhost:8081/api/v1/heartfeltdrama";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Heartfeltdrama[]>{
      return this.http.get<Heartfeltdrama[]>(this.baseurl);
    }
}
