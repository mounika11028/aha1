import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hiddengems } from '../models/hiddengems';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiddengemsService {
  private baseurl="assets/hiddengems.json";
    private baseurl1="http://localhost:8081/api/v1/hiddengems";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Hiddengems[]>{
      return this.http.get<Hiddengems[]>(this.baseurl);
    }
}
