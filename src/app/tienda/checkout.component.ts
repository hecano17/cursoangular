import { Component } from "@angular/core";
import { OrdenRepositorio } from '../modelo/orden.repositorio';
import { Orden } from '../modelo/orden.model';
import { NgForm } from '@angular/forms';



@Component({
    
    templateUrl : "checkout.component.html"
    //template:'<div><h3 class="bg-info p-1 text-white">Checkout</h3></div>'
 })
 

export class CheckOutComponent{

     ordenGenerada: boolean = false;
     enviado: boolean = false;
    
   constructor(public repositorio: OrdenRepositorio,public orden: Orden){

   }

   enviarOrden(form: NgForm){
            this.enviado = true;
            if(form.valid){
                this.repositorio.grabarOrden(this.orden).subscribe(
                    orden =>{
                        this.orden.limpiar();
                        this.enviado = true;
                        this.ordenGenerada = true;
                    }
                )
            }
   }

}