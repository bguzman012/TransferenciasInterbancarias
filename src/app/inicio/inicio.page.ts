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

  bancos: any;
  bancos2: any;
  array: any;
  dato: any
  cuenta: Cuenta = new Cuenta();
  tipoCuentas: any;
  receptor: Receptor = new Receptor();
  transaccion: Transaccion = new Transaccion();
  tipoCuentaUnique: any
  usuario: Usuario = new Usuario()

  tiitle='proxy';



  constructor(public toastController: ToastController, public serviceLoggin: LogginService, public transferService: TransferenciasService, public alertController: AlertController, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.bancos = this.serviceLoggin.getBancos()
    this.serviceLoggin.getBancos()
      .then(data => {
        console.log(data)
        this.pasarDatoArray(data["data"])
      });
    this.tipoCuentas = ['Ahorro', 'Corriente'];
  }

  pasarDatoArray(param: any) {

    this.array = param
    this.array.forEach(element => {
      console.log(element)
    });

  }

  crearTransaccion() {
    console.log(this.dato)
    console.log(this.tipoCuentaUnique)
    this.usuario.idUsuario = localStorage.getItem("idUsuario")
    console.log(this.usuario.idUsuario)
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
    let postData = {
      id: "5",
      correo:"spanish"
    }
    this.transferService.makeATransfer(JSON.stringify(this.transaccion)).subscribe(res =>{
     
        console.log(res);
      });
  }

}
