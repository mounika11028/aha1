import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Houseofhorrors } from '../models/houseofhorrors';

@Injectable({
  providedIn: 'root'
})
export class HouseofhorrorsService {
  private baseurl="assets/houseofhorrors.json";
    private baseurl1="http://localhost:8081/api/v1/houseofhorrors";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Houseofhorrors[]>{
      return this.http.get<Houseofhorrors[]>(this.baseurl);
    }
}
