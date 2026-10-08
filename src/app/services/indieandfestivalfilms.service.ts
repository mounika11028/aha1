import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Indieandfestivalfilms } from '../models/indieandfestivalfilms';

@Injectable({
  providedIn: 'root'
})
export class IndieandfestivalfilmsService {
  private baseurl="assets/indieandfestivalfilms.json";
    private baseurl1="http://localhost:8081/api/v1/indieandfestivalfilms";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Indieandfestivalfilms[]>{
      return this.http.get<Indieandfestivalfilms[]>(this.baseurl);
    }
}
