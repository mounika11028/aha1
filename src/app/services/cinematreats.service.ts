import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cinematreats } from '../models/cinematreats';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinematreatsService {
  private baseurl="assets/cinematreats.json";
    private baseurl1="http://localhost:8081/api/v1/cinematreats";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Cinematreats[]>{
      return this.http.get<Cinematreats[]>(this.baseurl);
    }
}
