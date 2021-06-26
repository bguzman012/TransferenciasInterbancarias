(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loggin-loggin-module"],{

/***/ "LQbH":
/*!*************************************************!*\
  !*** ./src/app/loggin/loggin-routing.module.ts ***!
  \*************************************************/
/*! exports provided: LogginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogginPageRoutingModule", function() { return LogginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loggin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loggin.page */ "pCQ3");




const routes = [
    {
        path: '',
        component: _loggin_page__WEBPACK_IMPORTED_MODULE_3__["LogginPage"]
    }
];
let LogginPageRoutingModule = class LogginPageRoutingModule {
};
LogginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LogginPageRoutingModule);



/***/ }),

/***/ "Si8/":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loggin/loggin.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-center\">Iniciar sesión</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n\r\n\r\n  <form autocomplete=\"on\" (ngSubmit)=\"doLogin()\">\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label position=\"stacked\"> Correo <span class=\"text-danger\">*</span></ion-label>\r\n        <ion-input type=\"text\" [(ngModel)]=\"usuario.correo\" name=\"email\" required=\"true\"></ion-input>\r\n      </ion-item>\r\n     \r\n      <ion-item>\r\n        <ion-label position=\"stacked\"> Contraseña <span class=\"text-danger\">*</span></ion-label>\r\n        <ion-input type=\"password\" [(ngModel)]=\"usuario.contra\" name=\"email\" required=\"true\"></ion-input>\r\n      </ion-item>\r\n     \r\n\r\n    </ion-list>\r\n    <ion-button class=\"ion-margin-top\" size=\"small\" type=\"submit\" color=\"danger\" expand=\"block\">Inicio Sesion</ion-button>\r\n      \r\n      \r\n   \r\n\r\n  </form>\r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "mNdR":
/*!*****************************************!*\
  !*** ./src/app/loggin/loggin.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-message {\n  color: var(--ion-color-danger);\n}\n\n.icon {\n  max-width: 32vh;\n  display: block;\n  margin: 0 auto;\n}\n\nion-input, ion-item {\n  --background: transparent;\n}\n\nion-content {\n  --background: aliceblue;\n}\n\n:root {\n  --ion-safe-area-top: 20px;\n  --ion-safe-area-bottom: 22px;\n}\n\n.text-danger {\n  color: red;\n}\n\na {\n  color: red;\n}\n\n.text-danger-2 {\n  color: red;\n  font-size: small;\n}\n\n.centrado {\n  text-align: center;\n  font-family: inherit;\n  margin-left: 5%;\n  margin-right: 5%;\n}\n\nsection {\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nul {\n  display: flex;\n  justify-content: center;\n}\n\n.coming-soon {\n  width: 100%;\n}\n\n.time-countdown ul {\n  margin: 36px auto;\n}\n\n.time-countdown ul li.count-bg-one {\n  background: #468dbc;\n}\n\n.time-countdown ul li.count-bg-two {\n  background: #ef9024;\n}\n\n.time-countdown ul li.count-bg-three {\n  background: #ee337f;\n}\n\n.time-countdown ul li.count-bg-four {\n  background: #ee337f;\n  margin-right: 0;\n}\n\n.time-countdown ul li {\n  width: 12%;\n  margin-right: 4%;\n  text-align: center;\n  display: inline-block;\n  padding: 24px 20px;\n  color: #fff;\n}\n\n.radius {\n  border-radius: 5px;\n}\n\n.time-countdown ul li span {\n  color: #FFF;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 50px;\n  line-height: 60px;\n  font-weight: 700;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvZ2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw4QkFBQTtBQUNKOztBQUlBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBREo7O0FBSUE7RUFDSSx5QkFBQTtBQURKOztBQUdBO0VBQ0ksdUJBQUE7QUFBSjs7QUFFQTtFQUNJLHlCQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFDQTtFQUNJLFVBQUE7QUFFSjs7QUFBQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtBQUdKOztBQURBO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBS0o7O0FBRkE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7QUFLSjs7QUFGQTtFQUNJLFdBQUE7QUFLSjs7QUFGQTtFQUNJLGlCQUFBO0FBS0o7O0FBRkE7RUFDSSxtQkFBQTtBQUtKOztBQUZBO0VBQ0ksbUJBQUE7QUFLSjs7QUFGQTtFQUNJLG1CQUFBO0FBS0o7O0FBRkE7RUFDSSxtQkFBQTtFQUNBLGVBQUE7QUFLSjs7QUFGQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFLSjs7QUFGQTtFQUNJLGtCQUFBO0FBS0o7O0FBRkE7RUFDSSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLSiIsImZpbGUiOiJsb2dnaW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpO1xyXG59XHJcblxyXG5cclxuXHJcbi5pY29ue1xyXG4gICAgbWF4LXdpZHRoOiAzMnZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuaW9uLWlucHV0LCBpb24taXRlbXtcclxuICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWJhY2tncm91bmQ6IGFsaWNlYmx1ZTtcclxufVxyXG46cm9vdCB7XHJcbiAgICAtLWlvbi1zYWZlLWFyZWEtdG9wOiAyMHB4O1xyXG4gICAgLS1pb24tc2FmZS1hcmVhLWJvdHRvbTogMjJweDtcclxuICB9XHJcbi50ZXh0LWRhbmdlcntcclxuICAgIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogcmVkO1xyXG59XHJcbi50ZXh0LWRhbmdlci0ye1xyXG4gICAgY29sb3I6IHJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuLmNlbnRyYWRve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG59XHJcbnNlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmNvbWluZy1zb29uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGltZS1jb3VudGRvd24gdWwge1xyXG4gICAgbWFyZ2luOiAzNnB4IGF1dG87XHJcbn1cclxuXHJcbi50aW1lLWNvdW50ZG93biB1bCBsaS5jb3VudC1iZy1vbmUge1xyXG4gICAgYmFja2dyb3VuZDogIzQ2OGRiYztcclxufVxyXG5cclxuLnRpbWUtY291bnRkb3duIHVsIGxpLmNvdW50LWJnLXR3byB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWY5MDI0O1xyXG59XHJcblxyXG4udGltZS1jb3VudGRvd24gdWwgbGkuY291bnQtYmctdGhyZWUge1xyXG4gICAgYmFja2dyb3VuZDogI2VlMzM3ZjtcclxufVxyXG5cclxuLnRpbWUtY291bnRkb3duIHVsIGxpLmNvdW50LWJnLWZvdXIge1xyXG4gICAgYmFja2dyb3VuZDogI2VlMzM3ZjtcclxuICAgIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLnRpbWUtY291bnRkb3duIHVsIGxpIHtcclxuICAgIHdpZHRoOiAxMiU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMjRweCAyMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5yYWRpdXMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGltZS1jb3VudGRvd24gdWwgbGkgc3BhbiB7XHJcbiAgICBjb2xvcjogI0ZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "pCQ3":
/*!***************************************!*\
  !*** ./src/app/loggin/loggin.page.ts ***!
  \***************************************/
/*! exports provided: LogginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogginPage", function() { return LogginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loggin_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loggin.page.html */ "Si8/");
/* harmony import */ var _loggin_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loggin.page.scss */ "mNdR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_loggin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loggin.service */ "+pRu");
/* harmony import */ var _models_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Usuario */ "CfyB");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");








let LogginPage = class LogginPage {
    constructor(serviceLoggin, alertController, route, router) {
        this.serviceLoggin = serviceLoggin;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
        this.usuario = new _models_Usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
        //datos del temporizador que nos ayudara a contar el tiempo para el ingreso del codigo de verificación que sea de un minuto
        this.centesimas = 0;
        this.minutos = 59;
        this.segundos = 0;
        this._centesimas = '00';
        this._minutos = '00';
        this._segundos = '00';
        this.isRun = false;
        this.estado = 'play';
        this.refreshColor = 'light';
    }
    ngOnInit() {
    }
    //funcion que llama al service para comenzar a procesar el logeo de ser correcto o incorrecto el logeo se mostrara un mensaje
    // de notificacion
    doLogin() {
        this.usuarios = this.serviceLoggin.getUser(this.usuario);
        console.log(this.usuarios);
        this.usuarios.forEach(element => {
            console.log(element.length);
            this.length = element.length;
            localStorage.setItem("idUsuario", element[0]["idUsuario"]);
            if (this.length == 1) {
                this.showConfirm();
            }
            else {
                this.showAlert();
            }
        });
    }
    estadoSwap() {
        this.isRun = !this.isRun;
        if (this.isRun) {
            this.estado = 'pause';
            this.refreshColor = 'gris';
            this.start();
        }
        else {
            this.estado = 'play';
            this.refreshColor = 'light';
            this.pause();
        }
    }
    //contador del reloj que se activara una ves iniciada la sesion
    start() {
        this.contador = setInterval(() => {
            this.centesimas += 1;
            if (this.centesimas < 10)
                this._centesimas = '0' + this.centesimas;
            else
                this._centesimas = '' + this.centesimas;
            if (this.centesimas == 10) {
                this.centesimas = 0;
                this.segundos += 1;
                if (this.segundos < 10)
                    this._segundos = '0' + this.segundos;
                else
                    this._segundos = this.segundos + '';
                if (this.segundos == 60) {
                    this.segundos = 0;
                    this.minutos += 1;
                    if (this.minutos < 10)
                        this._minutos = '0' + this.minutos;
                    else
                        this._minutos = this.minutos + '';
                    this._segundos = '00';
                    if (this.minutos == 90) {
                        this.pause();
                    }
                }
            }
        }, 100);
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
                        localStorage.setItem("correo", this.usuario.correo);
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
    showMessageToken(para) {
        this.alertController.create({
            header: 'Inicio de Sesion Exitoso',
            message: 'Codiog:' + para,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        "Codigo " + para;
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
};
LogginPage.ctorParameters = () => [
    { type: src_app_services_loggin_service__WEBPACK_IMPORTED_MODULE_4__["LogginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
];
LogginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loggin',
        template: _raw_loader_loggin_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loggin_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LogginPage);



/***/ }),

/***/ "piKq":
/*!*****************************************!*\
  !*** ./src/app/loggin/loggin.module.ts ***!
  \*****************************************/
/*! exports provided: LogginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogginPageModule", function() { return LogginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loggin_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loggin-routing.module */ "LQbH");
/* harmony import */ var _loggin_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loggin.page */ "pCQ3");







let LogginPageModule = class LogginPageModule {
};
LogginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loggin_routing_module__WEBPACK_IMPORTED_MODULE_5__["LogginPageRoutingModule"]
        ],
        declarations: [_loggin_page__WEBPACK_IMPORTED_MODULE_6__["LogginPage"]]
    })
], LogginPageModule);



/***/ })

}]);
//# sourceMappingURL=loggin-loggin-module.js.map