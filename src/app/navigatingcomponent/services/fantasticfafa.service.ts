import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fantasticfafa } from '../models/fantasticfafa';

@Injectable({
  providedIn: 'root'
})
export class FantasticfafaService {
  private baseurl="";
    constructor(private http:HttpClient) { }
    onsubmit():Observable<Fantasticfafa[]> {
      return this.http.get<Fantasticfafa[]>(this.baseurl);
    }
}
