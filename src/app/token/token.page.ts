import { Component, OnDestroy, OnInit } from '@angular/core';
import { LogginService } from 'src/app/services/loggin.service'
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-token',
  templateUrl: './token.page.html',
  styleUrls: ['./token.page.scss'],
})
export class TokenPage implements OnInit, OnDestroy {
  public centesimas: number = 0;
  public minutos: number = 59;
  public segundos: number = 0;
  public contador: any;
   public _centesimas: string = '00';
  public _minutos: string = '00';
  public _segundos: string = '00';
  tokenSeguridad:any

  isRun = false;
  llave: any;
  estado: string = 'play';
  refreshColor = 'light';
  correo: any;

  constructor(public toastController: ToastController, public serviceLoggin: LogginService, public alertController: AlertController,private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    
    this.correo = localStorage.getItem("correo")
    console.log(this.correo)
    this.serviceLoggin.getToken(this.correo)
            .then(data => {

              this.getNumeroCodigo(data["codigo"])
              
            });
    this.estadoSwap()
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
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Tiempo Termino',
      duration: 2000
    });
    toast.present();
  }

  getNumeroCodigo(num:any){
    this.llave = num;
    console.log(this.llave)
  }
  verificar(){
    if(Number(this._segundos)<45){
      if(this.llave == this.tokenSeguridad){
        console.log("Es igual")
        this.showConfirm()
      }else{
        console.log("No es igual")
        this.showError()
      }
    }else{
      
    this.showTimeFinished();
    }
  }
  showError() {
    this.alertController.create({
      header: 'Codigo incorrecto',
      message: 'Intentelo Nuevamente',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            
            
          },
          
        }
        
      ]
    }).then(res => {
      res.present();
    });
  }

  showConfirm() {
    this.alertController.create({
      header: 'Codigo de seguridad es correcto',
      message: 'Gracias por usar nuestros servicios.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.isRun = false
            this.router.navigate(["/inicio"]); 
          },
          
        }
        
      ]
    }).then(res => {
      res.present();
    });
  }

  ngOnDestroy(){
    this.isRun=false;
  }

  showTimeFinished() {
    this.alertController.create({
      header: 'Se agoto el tiempo',
      message: 'Desea solicitar otro codigo de seguridad?',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
           
         
          this.router.navigate(["/loggin"]); 

        }
          
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            this.router.navigate(["/loggin"]); 
            console.log('Cancel clicked');
          }
        }
        
      ]
    }).then(res => {
      res.present();
    });
  }

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
        if (this.segundos >= 45) {
          this.segundos = 0;
          this.pause();
          
          
        }
      }
    }, 100)
  }

  pause() {
    clearInterval(this.contador);
  }

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
 

}
