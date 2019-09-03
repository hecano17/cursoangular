import { Component } from '@angular/core';
import { Carro } from '../modelo/carro.model';
import { ConexionService } from '../modelo/conexion.service';

@Component({
    // template:`<div><h3 class="bg-info p-1 text-white">Detalle de Carro</h3> </div>`
     templateUrl:"detalleCarro.component.html"
})
export class DetalleCarroComponent{

public conectado: boolean = true;

    constructor(public carro:Carro, private conexion: ConexionService){
        this.conectado = this.conexion.conectado;
        conexion.cambios.subscribe((p) => this.conectado = p);
    }
}
