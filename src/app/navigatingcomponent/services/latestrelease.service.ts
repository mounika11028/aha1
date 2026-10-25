import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Latestrelease } from '../models/latestrelease';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestreleaseService {
  private baseurl="http://localhost:8081/api/v1/latestreleasedata";
  constructor(private http:HttpClient){}
  onsubmit():Observable<Latestrelease[]>{
    return this.http.get<Latestrelease[]>(this.baseurl);
  }
}
