import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlansService {

  constructor(private http: HttpClient) { }

  getSubject() {
    return this.http.get('http://localhost:5001/plans'); 
  }
}