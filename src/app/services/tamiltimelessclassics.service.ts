import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tamiltimelessclassics } from '../models/tamiltimelessclassics';

@Injectable({
  providedIn: 'root'
})
export class TamiltimelessclassicsService {
  private baseurl="assets/tamiltimelessclassics.json";
    private baseurl1="http://localhost:8081/api/v1/tamiltimelessclassics";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Tamiltimelessclassics[]>{
      return this.http.get<Tamiltimelessclassics[]>(this.baseurl);
    }
}
