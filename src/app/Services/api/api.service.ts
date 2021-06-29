import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = '/api/restaurants/';
  //url = 'https://tellurium.behuns.com/api/restaurants/';

  constructor(private http:HttpClient) { 
  }

  getResturants(){
    let header = new HttpHeaders()
    .set('Type-content','aplication/json')

    return this.http.get(this.url, {
    headers: header
    });
  }  


}
