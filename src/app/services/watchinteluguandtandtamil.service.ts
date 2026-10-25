import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Watchinteluguandtamil } from '../models/watchinteluguandtamil';

@Injectable({
  providedIn: 'root'
})
export class WatchinteluguandtandtamilService {
  private baseurl="http://localhost:8081/api/v1/watchinteluguandtamildata";
  constructor(private http:HttpClient) {}
  onsubmit():Observable<Watchinteluguandtamil[]>{
    return this.http.get<Watchinteluguandtamil[]>(this.baseurl);
  }
}
