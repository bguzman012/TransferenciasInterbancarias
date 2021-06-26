import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogginService } from 'src/app/services/loggin.service'

import { TransferenciasService } from 'src/app/services/transferencias.service'
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Cuenta } from '../models/Cuenta';
import { Receptor } from '../models/Receptor';
import { Transaccion } from '../models/Transaccion';
import { Usuario } from '../models/Usuario';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  bancos: any = [];
  bancos2: any;
  array: any = [];
  dato: any
  cuenta: Cuenta = new Cuenta();
  tipoCuentas: any;
  receptor: Receptor = new Receptor();
  transaccion: Transaccion = new Transaccion();
  tipoCuentaUnique: any
  usuario: Usuario = new Usuario()
  transferencias: Observable<any[]>;

  constructor(public toastController: ToastController, public serviceLoggin: LogginService, public transferService: TransferenciasService, public alertController: AlertController, private route: ActivatedRoute, private router: Router) { }

  //Obtenemos los nombres de los bancos dados por MuleSoft
  ngOnInit() {

    let banco
    banco = {
      name: "'BANK SGB' PJSC"
    }
    let banco2
    banco2 = {
      name: "'BANK MOSCOW-MINSK' JSC"
    }
    let banco3
    banco3 = {
      name: "'BELAGROPROMBANK' JSC"
    }

    this.array.push(banco)
    this.array.push(banco2)
    this.array.push(banco3)
    console.log(this.array)
    this.tipoCuentas = ['Ahorro', 'Corriente'];
  }


  //Se recogen los datos llenados anteriormente para poder realizar la transaccion 
  crearTransaccion() {
    console.log(this.dato)
    console.log(this.tipoCuentaUnique)
    this.usuario.idUsuario = localStorage.getItem("idUsuario")
    console.log(this.usuario.idUsuario)
    //se llenan los objetos con los datos
    this.receptor.nombreInstitucion = this.dato
    this.receptor.tipoCuenta = this.tipoCuentaUnique
    this.transaccion.receptor = this.receptor
    
    let date: String = new Date().toLocaleDateString();
    let tiempo: String = new Date().toLocaleTimeString();
    console.log(tiempo)
    
    this.transaccion.fecha = date
    this.transaccion.hora = tiempo
    this.cuenta.usuario = this.usuario
    this.transaccion.cuenta = this.cuenta

    console.log(JSON.stringify(this.transaccion))
    
    this.transferService.makeATransfer(JSON.stringify(this.transaccion)).subscribe(res =>{
     
      });
  }
  //lista las transacciones hechas por el usuario
  listarTransacciones(){
    this.usuario.idUsuario = localStorage.getItem("idUsuario")
    this.transferencias = this.transferService.getTransferencias(this.usuario)
    this.transferencias.forEach(element => {
      console.log(element)
      
    })
    this.router.navigate(["/transferencias"]); 
    

  }

  //si la transaccion fue hecha con exito aparece un mensaje de notificacion
  showMessageToken(){
    this.alertController.create({
      header: 'Transaccion realizada con exito',
      message: 'La transaccion se ha realizado con exito',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }


}
