import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostrewatchedgems } from '../models/mostrewatchedgems';

@Injectable({
  providedIn: 'root'
})
export class MostrewatchedgemsService {
  private baseurl="assets/mostrewatchedgems.json";
    private baseurl1="http://localhost:8081/api/v1/mostrewatchedgems";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Mostrewatchedgems[]>{
      return this.http.get<Mostrewatchedgems[]>(this.baseurl);
    }
}
