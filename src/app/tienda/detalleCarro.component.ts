import { Component } from '@angular/core';
import { Carro } from '../modelo/carro.model';

@Component({
    // template:`<div><h3 class="bg-info p-1 text-white">Detalle de Carro</h3> </div>`
     templateUrl:"detalleCarro.component.html"
})
export class DetalleCarroComponent{
    constructor(private carro:Carro){
        
    }
}
