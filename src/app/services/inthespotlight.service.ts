import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inthespotlight } from '../models/inthespotlight';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InthespotlightService {
  private baseurl="assets/inthespotlight.json";
    private baseurl1="http://localhost:8081/api/v1/inthespotlight";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Inthespotlight[]>{
      return this.http.get<Inthespotlight[]>(this.baseurl);
    }
}
