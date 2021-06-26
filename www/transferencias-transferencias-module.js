(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transferencias-transferencias-module"],{

/***/ "6RD6":
/*!*********************************************************!*\
  !*** ./src/app/transferencias/transferencias.module.ts ***!
  \*********************************************************/
/*! exports provided: TransferenciasPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciasPageModule", function() { return TransferenciasPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transferencias_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transferencias-routing.module */ "GlE3");
/* harmony import */ var _transferencias_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transferencias.page */ "jw5g");







let TransferenciasPageModule = class TransferenciasPageModule {
};
TransferenciasPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transferencias_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransferenciasPageRoutingModule"]
        ],
        declarations: [_transferencias_page__WEBPACK_IMPORTED_MODULE_6__["TransferenciasPage"]]
    })
], TransferenciasPageModule);



/***/ }),

/***/ "GlE3":
/*!*****************************************************************!*\
  !*** ./src/app/transferencias/transferencias-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TransferenciasPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciasPageRoutingModule", function() { return TransferenciasPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transferencias_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transferencias.page */ "jw5g");




const routes = [
    {
        path: '',
        component: _transferencias_page__WEBPACK_IMPORTED_MODULE_3__["TransferenciasPage"]
    }
];
let TransferenciasPageRoutingModule = class TransferenciasPageRoutingModule {
};
TransferenciasPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransferenciasPageRoutingModule);



/***/ }),

/***/ "VQQC":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transferencias/transferencias.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title class=\"ion-text-center\">Transferencias</ion-title>\r\n\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-list>\r\n    <ion-item *ngFor=\"let transfer of transferencias | async\" >\r\n      <ion-label>\r\n        <h2>{{transfer.nombre}}</h2>\r\n        <h3>{{transfer.numeroCuenta}}</h3> \r\n        <h3>{{transfer.CI}}</h3>\r\n        <p>{{transfer.nombreBanco}}</p>\r\n        <p>{{transfer.monto}}</p>\r\n        <p>{{transfer.tipoCuenta}}</p>\r\n        <p>{{transfer.fecha}}</p>\r\n        <p>{{transfer.hora}}</p> \r\n        \r\n      \r\n      </ion-label>\r\n    </ion-item>\r\n\r\n    \r\n  </ion-list>\r\n  <ion-grid>\r\n    <ion-row class=\"ion-align-items-center\">\r\n     \r\n      <ion-col size=\"12\" class=\"ion-text-center\">\r\n        <ion-button color=\"success\" (click)=\"crearTransaccion()\">Crear Transaccion</ion-button>\r\n      </ion-col>\r\n     \r\n    </ion-row>\r\n  </ion-grid>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "XzpF":
/*!*********************************************************!*\
  !*** ./src/app/transferencias/transferencias.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc2ZlcmVuY2lhcy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "jw5g":
/*!*******************************************************!*\
  !*** ./src/app/transferencias/transferencias.page.ts ***!
  \*******************************************************/
/*! exports provided: TransferenciasPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferenciasPage", function() { return TransferenciasPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transferencias_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transferencias.page.html */ "VQQC");
/* harmony import */ var _transferencias_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transferencias.page.scss */ "XzpF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_transferencias_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/transferencias.service */ "QCh9");
/* harmony import */ var _models_Usuario__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/Usuario */ "CfyB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");







let TransferenciasPage = class TransferenciasPage {
    constructor(transferService, route, router) {
        this.transferService = transferService;
        this.route = route;
        this.router = router;
        this.usuario = new _models_Usuario__WEBPACK_IMPORTED_MODULE_5__["Usuario"]();
    }
    //se obtienen las transferencias hechas por el usaurio
    ngOnInit() {
        this.usuario.idUsuario = localStorage.getItem("idUsuario");
        this.transferencias = this.transferService.getTransferencias(this.usuario);
        this.transferencias.forEach(element => {
            console.log(element);
        });
    }
    //se envian los datos para la creacion de la transaccion
    crearTransaccion() {
        this.router.navigate(["/inicio"]);
    }
};
TransferenciasPage.ctorParameters = () => [
    { type: src_app_services_transferencias_service__WEBPACK_IMPORTED_MODULE_4__["TransferenciasService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
TransferenciasPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-transferencias',
        template: _raw_loader_transferencias_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transferencias_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TransferenciasPage);



/***/ })

}]);
//# sourceMappingURL=transferencias-transferencias-module.js.map