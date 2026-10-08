import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Livechannels } from '../models/livechannels';

@Injectable({
  providedIn: 'root'
})
export class LivechannelsService {
  private baseurl="assets/livechannels.json";
    private baseurl1="http://localhost:8081/api/v1/livechannels";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Livechannels[]>{
      return this.http.get<Livechannels[]>(this.baseurl);
    }
}
