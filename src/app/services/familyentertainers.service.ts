import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Familyentertainers } from '../models/familyentertainers';

@Injectable({
  providedIn: 'root'
})
export class FamilyentertainersService {
  private baseurl="assets/familyentertainers.json";
    private baseurl1="http://localhost:8081/api/v1/familyentertainers";
    constructor(private http:HttpClient) {}
    onsubmit():Observable<Familyentertainers[]>{
      return this.http.get<Familyentertainers[]>(this.baseurl);
    }
}
