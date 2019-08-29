import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable()
export class Carro{
    public lineas: LineaCarro[];
    public numeroItems: number = 0;
    public precioTotalCarro : number = 0;

    agregarLinea(producto: Producto, cantidad: number){
        let linea = this.lineas.find(lin => lin.producto.id == producto.id);
        if(linea != undefined){
            linea.cantidad += cantidad;
        }else{
            this.lineas.push(new LineaCarro(producto,cantidad))
        }
    }
   actualizarCantidad(producto: Producto,cantidad: number){
       let linea = this.lineas.find(l => l.producto.id == producto.id);
       if(linea != undefined){
           linea.cantidad += cantidad;
       }
       this.recalcular();
   }

   removerLinea(idLinea: number){
       let index = this.lineas.findIndex(l=> l.producto.id == idLinea);
       this.lineas.splice(index,1);
   }

   private recalcular(){
       this.numeroItems = 0;
       this.precioTotalCarro = 0;
       this.lineas.forEach(l => {this.numeroItems += l.cantidad;
          this.precioTotalCarro += l.producto.precio * l.cantidad
             })
   }


   limpiarCaroo(){
       this.lineas = [];
       this.numeroItems = 0;
       this.precioTotalCarro =0;
   }
     

}

export class LineaCarro{
    constructor(public producto: Producto, public cantidad : number){

    }
    get totalLinea(){
        return this.cantidad * this.producto.precio;
    }
}