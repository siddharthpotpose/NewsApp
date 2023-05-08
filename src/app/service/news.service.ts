import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  baseUrl:string='https://newsapi.org/v2/top-headlines?'

  constructor(private http:HttpClient) { }
  getMethod():Observable<any>{
return this.http.get(`${this.baseUrl}country=in&apiKey=0a785691ff504feda4ba5a8360cbbec5`)
  }
  techData():Observable<any> {
    return this.http.get(`${this.baseUrl}country=in&category=technology&apiKey=0a785691ff504feda4ba5a8360cbbec5`)

  }
  businessData():Observable<any>{
    return this.http.get(`${this.baseUrl}country=in&category=business&apiKey=0a785691ff504feda4ba5a8360cbbec5`)
  }
  getSportsData():Observable<any>{
return this.http.get(`${this.baseUrl}country=in&category=sports&apiKey=0a785691ff504feda4ba5a8360cbbec5`)
  }
}
