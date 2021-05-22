import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  path: string = '/transferencias_bancarias?correo=spanish';

  private httpHeaders = new HttpHeaders({
    "Access-Control-Request-Method": "POST", "Access-Control-Request-Headers":"Content-Type",
    "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" 
  });

  constructor(public http: HttpClient) { }

  makeATransfer(postData: any) {

    return this.http.post<Response>(this.path, postData, { headers: this.httpHeaders });
  }
}
