import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  //dwenfweeu

  path : string = 'http://10.168.0.5:8081/loggin';
  path2 : string = 'http://10.168.0.5:8081/tockenizar';
  path3 : string = 'http://10.168.0.5:8081/bancos';
  

  constructor(public http: HttpClient) { }
   //se hace una solicitud get para el logeo
  getUser(user:Usuario): Observable<any>{
    return this.http.get<any>(this.path + "?correo=" + user.correo + "&contra="+user.contra)
  }


  // se procede con la realización del token para el logeo
  getToken(correo:any){
    return new Promise(resolve=>{
      this.http.get(this.path2 + "?correo=" + correo).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }
// se obtiene el listado de los bancos
  getBancos(){
    return new Promise(resolve=>{
      this.http.get(this.path3).subscribe(data=>{
          resolve(data);
      },error=>{
        console.log(error);
      });
    });
  }

}
