import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '/api/';

  constructor(private http:HttpClient) { }

  getHttpOptions(){
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
  }

  getRestaurants():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}restaurants/`,this.getHttpOptions());
  }

  getReviews():Observable<any[]> {
    return this.http.get<any[]>(`${this.url}reviews/`,this.getHttpOptions());
  }

  addReview(body: any):Observable<any>{
    return this.http.post<any>(`${this.url}reviews/`, body, this.getHttpOptions());
  }

  addRestaurant(body: any):Observable<any>{
    return this.http.post<any>(`${this.url}restaurants/`, body, this.getHttpOptions());
  }

}
