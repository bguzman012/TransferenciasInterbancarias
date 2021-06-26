import { Component, OnInit } from '@angular/core';
import { LogginService } from 'src/app/services/loggin.service'
import { Usuario } from '../models/Usuario';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { timer } from 'rxjs';
import { BehaviorSubject} from 'rxjs'; 
@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.page.html',
  styleUrls: ['./loggin.page.scss'],
})
export class LogginPage implements OnInit {

  usuario: Usuario = new Usuario()

  usuarios: Observable<any[]>;
  token: any;
  length: any;
  //datos del temporizador que nos ayudara a contar el tiempo para el ingreso del codigo de verificación que sea de un minuto
  public centesimas: number = 0;
  public minutos: number = 59;
  public segundos: number = 0;
  public contador: any;

  public _centesimas: string = '00';
  public _minutos: string = '00';
  public _segundos: string = '00';

  isRun = false;
  estado: string = 'play';
  refreshColor = 'light';



  constructor(public serviceLoggin: LogginService,  public alertController: AlertController,private route: ActivatedRoute, private router: Router) { }



  ngOnInit() {
  
   

  }
  
  //funcion que llama al service para comenzar a procesar el logeo de ser correcto o incorrecto el logeo se mostrara un mensaje
  // de notificacion
  doLogin(){
    this.usuarios = this.serviceLoggin.getUser(this.usuario)
    
    console.log(this.usuarios)
    this.usuarios.forEach(element => {
      console.log(element.length)
      this.length = element.length
      
      localStorage.setItem("idUsuario", element[0]["idUsuario"])
      if(this.length == 1){
        this.showConfirm();        
      }else{
        this.showAlert();

      }
    })
    
  }
 
  estadoSwap() {
    this.isRun = !this.isRun;
    if (this.isRun) {
      this.estado = 'pause';
      this.refreshColor = 'gris';
      this.start();
    } else {
      this.estado = 'play';
      this.refreshColor = 'light';
      this.pause();
    }

  }

  //contador del reloj que se activara una ves iniciada la sesion
  start() {

    this.contador = setInterval(() => {
      this.centesimas += 1;
      if (this.centesimas < 10) this._centesimas = '0' + this.centesimas;
      else this._centesimas = '' + this.centesimas;
      if (this.centesimas == 10) {
        this.centesimas = 0;
        this.segundos += 1;
        if (this.segundos < 10) this._segundos = '0' + this.segundos;
        else this._segundos = this.segundos + '';
        if (this.segundos == 60) {
          this.segundos = 0;
          this.minutos += 1;
          if (this.minutos < 10) this._minutos = '0' + this.minutos;
          else this._minutos = this.minutos + '';
          this._segundos = '00';
          if (this.minutos == 90) {
            this.pause();
          }
        }
      }
    }, 100)
  }

  pause() {
    clearInterval(this.contador);
  }

  //se detiene el reloj una ves ingresada el codigo de verificacion correctamente
  stop() {

    if (!this.isRun) {
      clearInterval(this.contador);
      this.minutos = 0;
      this.segundos = 0;
      this.centesimas = 0;

      this._centesimas = '00';
      this._segundos = '00';
      this._minutos = '00';

      this.estado = 'play';
      this.isRun = false;
      this.contador = null;
    }

  }
 

  // al iniciar sesion correctamente se mostrara un alerta
  presentPrompt() {
    let alert = this.alertController.create({
      header: 'Inicio de Sesion Exitoso',
      message: 'Se inicio correctamente' + this._segundos,
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  //cuando el usuario inicia sesion se le notificará que debe ingresar un codigo de verficacion
  // si al pasar el tiempo limite no se ha ingresado el codigo de seguridad se le dará la oportunidad al usuario
  // de generar el codigo nuevamente
  showConfirm() {
    this.alertController.create({
      header: 'Datos correctos',
      message: 'Necesita ingresar un codigo de seguridad para poder iniciar sesion',
      buttons: [
        {
          text: 'Generar codigo de seguridad?',
          handler: () => {
            localStorage.setItem("correo", this.usuario.correo)
            this.router.navigate(["/token"]); 
          },
          
          
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  //mensaje de alerta si se ha pasado la prueba de seguridad
  showMessageToken(para:any){
    this.alertController.create({
      header: 'Inicio de Sesion Exitoso',
      message: 'Codiog:' + para,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            "Codigo " + para
          }
        }
      ]
    }).then(res => {
      res.present();
    });
  }

  //mensaje de alerta si no se ha inicado sesion correctamente
  showAlert() {

    this.alertController.create({
      header: 'Alerta',
      subHeader: 'Datos incorrectos',
      message: 'Los datos ingresados no corresponden a un usuario, intentelo nuevamente, por favor',
      buttons: ['OK']
    }).then(res => {

      res.present();

    });

  }



}
