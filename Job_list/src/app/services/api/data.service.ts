import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor(private http: HttpClient) {

  }

  private UrlEmpresa = "http://localhost:8080/empresa"


  getDado(): Observable<any> {
     return this.http.get<any>(`${this.UrlEmpresa}/getAll`, { observe: "response" })
  }
  Update() {

  }


 



}
