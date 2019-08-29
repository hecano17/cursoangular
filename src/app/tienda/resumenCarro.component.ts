import { Component } from "@angular/core";
import { Carro } from '../modelo/carro.model';


@Component({
    selector:"carrito",
   templateUrl:"resumenCarro.component.html" 
 
})

export class ResumenCarro{

    constructor(public carro:Carro){

    }
}