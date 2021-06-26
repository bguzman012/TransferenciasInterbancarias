import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { HttpClientModule } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TransferenciasService {

  //se definen las urls que se usaran para realizar laa transaccion
  path: string = '/transferencias_bancarias';
  path2: string = 'http://34.94.191.122:8081/listar_transferencias';

  private httpHeaders = new HttpHeaders({
    "Access-Control-Request-Method": "POST", "Access-Control-Request-Headers":"Content-Type",
    "Access-Control-Allow-Origin": "*", "Content-Type": "application/json" 
  });

  constructor(public http: HttpClient) { }
  
  //se inserta la transaccion
  makeATransfer(postData: any) {

    return this.http.post<Response>(this.path, postData, { headers: this.httpHeaders });
  }

  // se devuelve el listado de transacciones hechas por el usuario segun el id
  getTransferencias(user:Usuario): Observable<any>{
    return this.http.get<any>(this.path2 + "?idUser=" + user.idUsuario)
  }
}
