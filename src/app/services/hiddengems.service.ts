import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hiddengems } from '../models/hiddengems';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HiddengemsService {
  private baseurl="http://localhost:8081/api/v1/hiddengemsdata";
  constructor(private http:HttpClient) {}
  onsubmit():Observable<Hiddengems[]>{
    return this.http.get<Hiddengems[]>(this.baseurl);
  }
}
