import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Regionalmix } from '../models/regionalmix';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionalmixService {
  private baseurl="http://localhost:8081/api/v1/regionalmixdata";
  constructor(private http:HttpClient) {}
  onsubmit():Observable<Regionalmix[]>{
    return this.http.get<Regionalmix[]>(this.baseurl);
  }
}
