import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mysteryandsupernatura } from '../models/mysteryandsupernatura';

@Injectable({
  providedIn: 'root'
})
export class MysteryandsupernaturaService {
  private baseurl="assets/mysteryandsupernatural.json";
    private baseurl1="http://localhost:8081/api/v1/mysteryandsupernatural";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Mysteryandsupernatura[]>{
      return this.http.get<Mysteryandsupernatura[]>(this.baseurl);
    }
}
