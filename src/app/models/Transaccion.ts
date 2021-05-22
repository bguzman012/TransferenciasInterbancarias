import { Cuenta } from "./Cuenta";
import { Receptor } from "./Receptor";

export class Transaccion{
    idTransaccion: any;
    fecha: any;
    hora:any;
    nombreBancoRemitente: any;
    monto: any;
    costo: any;
    receptor: Receptor;
    cuenta: Cuenta;
}