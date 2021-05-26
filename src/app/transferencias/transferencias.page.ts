import { Component, OnInit } from '@angular/core';
import { TransferenciasService } from 'src/app/services/transferencias.service'
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-transferencias',
  templateUrl: './transferencias.page.html',
  styleUrls: ['./transferencias.page.scss'],
})
export class TransferenciasPage implements OnInit {

  transferencias: Observable<any[]>;
  usuario: Usuario = new Usuario()

  constructor(public transferService: TransferenciasService,private route: ActivatedRoute, private router: Router) { }

  //se obtienen las transferencias hechas por el usaurio
  ngOnInit() {
    this.usuario.idUsuario = localStorage.getItem("idUsuario")
    this.transferencias = this.transferService.getTransferencias(this.usuario)
    this.transferencias.forEach(element => {
      console.log(element)
      
    })
  }
  //se envian los datos para la creacion de la transaccion
  crearTransaccion(){
    this.router.navigate(["/inicio"]); 

  }

}
