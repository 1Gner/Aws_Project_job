import { HttpClient } from '@angular/common/http';

import { response } from 'express';
import { catchError, Observable } from 'rxjs';
import { FilterService } from '../controller/filter.service';
import { Injectable, Injector } from '@angular/core';


@Injectable({
  providedIn: 'root'
})


export class DataService {
  constructor(private http: HttpClient) {

  }


  private UrlEmpresa = 'http://3.147.126.24:8080/empresa'
  private UrlEmprego = 'http://3.147.126.24:8080/emprego'


  getDado(): Observable<any> {
     return this.http.get<any>(`${this.UrlEmpresa}/getAll`, { observe: "response" })
  }


  PostEmpresa(Empresa:any): Observable<any> {
    const formData = new FormData();
    formData.append('foto', Empresa.foto);
    formData.append('logo', Empresa.nome_empresa);
  
  
    return this.http.post(`${this.UrlEmpresa}/save`, formData )
  }
 

  PostEmprego(Emprego:any):Observable<any>{
    const emprego = {
      localizacao:Emprego.localizacao,
      tipo:Emprego.tipo,
      funcao:Emprego.funcao,
      id_empresa:Emprego.nome_empresa,
      skills:Emprego.skills.split(',')
    };
    return this.http.post(`${this.UrlEmprego}/save`, emprego )
  }



}
