import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mostwatchedintamil } from '../models/mostwatchedintamil';

@Injectable({
  providedIn: 'root'
})
export class MostwatchedintamilService {
  private baseurl="assets/mostwatchedintamil.json";
    private baseurl1="http://localhost:8081/api/v1/mostwatchedintamil";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Mostwatchedintamil[]>{
      return this.http.get<Mostwatchedintamil[]>(this.baseurl);
    }
}
