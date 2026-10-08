import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostwatchedintelugu } from '../models/mostwatchedintelugu';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedinteluguService {
  private baseurl="assets/mostwatchedintelugu.json";
    private baseurl1="http://localhost:8081/api/v1/mostwatchedintelugu";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Mostwatchedintelugu[]>{
      return this.http.get<Mostwatchedintelugu[]>(this.baseurl);
    }
}
