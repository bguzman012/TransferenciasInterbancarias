(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["token-token-module"],{

/***/ "VdSr":
/*!***************************************!*\
  !*** ./src/app/token/token.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section {\n  width: 100%;\n  height: 100%;\n  min-height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\nul {\n  display: flex;\n  justify-content: center;\n}\n\n.coming-soon {\n  width: 100%;\n}\n\n.time-countdown ul {\n  margin: 36px auto;\n}\n\n.time-countdown ul li.count-bg-one {\n  background: #468dbc;\n}\n\n.time-countdown ul li.count-bg-two {\n  background: #ef9024;\n}\n\n.time-countdown ul li.count-bg-three {\n  background: #ee337f;\n}\n\n.time-countdown ul li.count-bg-four {\n  background: #E30000;\n  margin-right: 0;\n}\n\n.time-countdown ul li {\n  width: 12%;\n  margin-right: 4%;\n  text-align: center;\n  display: inline-block;\n  padding: 24px 20px;\n  color: #fff;\n}\n\n.radius {\n  border-radius: 5px;\n}\n\n.time-countdown ul li span {\n  color: #FFF;\n  font-family: \"Poppins\", sans-serif;\n  font-size: 50px;\n  line-height: 60px;\n  font-weight: 700;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRva2VuLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksbUJBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGtDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBQ0oiLCJmaWxlIjoidG9rZW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxudWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY29taW5nLXNvb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aW1lLWNvdW50ZG93biB1bCB7XHJcbiAgICBtYXJnaW46IDM2cHggYXV0bztcclxufVxyXG5cclxuLnRpbWUtY291bnRkb3duIHVsIGxpLmNvdW50LWJnLW9uZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNDY4ZGJjO1xyXG59XHJcblxyXG4udGltZS1jb3VudGRvd24gdWwgbGkuY291bnQtYmctdHdvIHtcclxuICAgIGJhY2tncm91bmQ6ICNlZjkwMjQ7XHJcbn1cclxuXHJcbi50aW1lLWNvdW50ZG93biB1bCBsaS5jb3VudC1iZy10aHJlZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWUzMzdmO1xyXG59XHJcblxyXG4udGltZS1jb3VudGRvd24gdWwgbGkuY291bnQtYmctZm91ciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRTMwMDAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG59XHJcblxyXG4udGltZS1jb3VudGRvd24gdWwgbGkge1xyXG4gICAgd2lkdGg6IDEyJTtcclxuICAgIG1hcmdpbi1yaWdodDogNCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDIwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnJhZGl1cyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi50aW1lLWNvdW50ZG93biB1bCBsaSBzcGFuIHtcclxuICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */");

/***/ }),

/***/ "W+Oc":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/token/token.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-center\">Ingrese Codigo de seguridad</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"ion-padding\">\r\n  \r\n  <ion-list no-lines>\r\n\r\n   \r\n    <ion-grid>\r\n      <ion-row class=\"ion-align-items-center\">\r\n       \r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <div class=\"coming-soon\">\r\n            <div class=\"time-countdown\">\r\n                <ul>\r\n                    <li class=\"count-bg-four radius\"><span id=\"seconds\">{{_segundos}}</span>Segundos</li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n       \r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-input type=\"text\" [(ngModel)]=\"tokenSeguridad\" name=\"email\" required=\"true\" placeholder=\"Ingrese codigo    \"></ion-input>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n       \r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n         \r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"ion-align-items-center\">\r\n       \r\n        <ion-col size=\"12\" class=\"ion-text-center\">\r\n          <ion-button color=\"success\" (click)=\"verificar()\">Ingresar</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n   \r\n  </ion-list>\r\n\r\n  \r\n  \r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "aGSS":
/*!***********************************************!*\
  !*** ./src/app/token/token-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TokenPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPageRoutingModule", function() { return TokenPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _token_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token.page */ "enIc");




const routes = [
    {
        path: '',
        component: _token_page__WEBPACK_IMPORTED_MODULE_3__["TokenPage"]
    }
];
let TokenPageRoutingModule = class TokenPageRoutingModule {
};
TokenPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TokenPageRoutingModule);



/***/ }),

/***/ "enIc":
/*!*************************************!*\
  !*** ./src/app/token/token.page.ts ***!
  \*************************************/
/*! exports provided: TokenPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPage", function() { return TokenPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_token_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./token.page.html */ "W+Oc");
/* harmony import */ var _token_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token.page.scss */ "VdSr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_loggin_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/loggin.service */ "+pRu");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");








let TokenPage = class TokenPage {
    constructor(toastController, serviceLoggin, alertController, route, router) {
        this.toastController = toastController;
        this.serviceLoggin = serviceLoggin;
        this.alertController = alertController;
        this.route = route;
        this.router = router;
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
        this.correo = localStorage.getItem("correo");
        console.log(this.correo);
        this.serviceLoggin.getToken(this.correo)
            .then(data => {
            this.getNumeroCodigo(data["codigo"]);
        });
        this.estadoSwap();
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
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Tiempo Termino',
                duration: 2000
            });
            toast.present();
        });
    }
    getNumeroCodigo(num) {
        this.llave = num;
        console.log(this.llave);
    }
    verificar() {
        if (Number(this._segundos) < 45) {
            if (this.llave == this.tokenSeguridad) {
                console.log("Es igual");
                this.showConfirm();
            }
            else {
                console.log("No es igual");
                this.showError();
            }
        }
        else {
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
                        this.isRun = false;
                        this.router.navigate(["/inicio"]);
                    },
                }
            ]
        }).then(res => {
            res.present();
        });
    }
    ngOnDestroy() {
        this.isRun = false;
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
                if (this.segundos >= 45) {
                    this.segundos = 0;
                    this.pause();
                }
            }
        }, 100);
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
};
TokenPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] },
    { type: src_app_services_loggin_service__WEBPACK_IMPORTED_MODULE_4__["LogginService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TokenPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-token',
        template: _raw_loader_token_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_token_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TokenPage);



/***/ }),

/***/ "qWfp":
/*!***************************************!*\
  !*** ./src/app/token/token.module.ts ***!
  \***************************************/
/*! exports provided: TokenPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenPageModule", function() { return TokenPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _token_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-routing.module */ "aGSS");
/* harmony import */ var _token_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token.page */ "enIc");







let TokenPageModule = class TokenPageModule {
};
TokenPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _token_routing_module__WEBPACK_IMPORTED_MODULE_5__["TokenPageRoutingModule"]
        ],
        declarations: [_token_page__WEBPACK_IMPORTED_MODULE_6__["TokenPage"]]
    })
], TokenPageModule);



/***/ })

}]);
//# sourceMappingURL=token-token-module.js.map