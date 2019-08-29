import { Injectable } from '@angular/core';
import { Carro } from './carro.model';

@Injectable()
export class Orden{
    public id: number;
    public nombre: string;
    public direccion: string;
    public region: string;
    public zip: string;
    public pais: string;
    public email: string;
    public enviado: boolean = false;

    constructor( public carro: Carro){

    }

limpiar(){
    this.id = null;
    this.nombre = this.pais =this.direccion = this.region = null;
    this.zip = this.zip = this.email = null;
    this.enviado = false;
    this.carro.limpiarCarro();
}

}