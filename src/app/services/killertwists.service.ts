import { Injectable } from '@angular/core';
import { Killertwists } from '../models/killertwists';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KillertwistsService {
  private baseurl="http://localhost:8081/api/v1/killertwistsdata";
  constructor(private http:HttpClient) {}
  onsubmit():Observable<Killertwists[]>{
    return this.http.get<Killertwists[]>(this.baseurl);
  }
}
