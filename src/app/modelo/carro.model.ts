import { Injectable } from '@angular/core';
import { Producto } from './producto.model';

@Injectable()
export class Carro{
    public lineas: LineaCarro[]=[];
    public numeroItems : number =0;
    public precioTotalCarro : number=0;
    
    agregarLinea(producto:Producto,cantidad:number=1){
        let linea = this.lineas.find(lin => lin.producto.id==producto.id);
        if(linea != undefined){
            linea.cantidad+=cantidad;
        }
        else{
            this.lineas.push(new LineaCarro(producto,cantidad));
        }
        this.recalcular();
    }

    actualizarCantidad(producto:Producto,cantidad:number){
        let linea=this.lineas.find(lin=> lin.producto.id==producto.id);
        if(linea != undefined){
            linea.cantidad=Number(cantidad);
        }
        this.recalcular();

    }

    removerLinea(idLinea:number){
        let index=this.lineas.findIndex(lin=> lin.producto.id==idLinea);
                this.lineas.splice(index,1);
                this.recalcular();
    }

    private recalcular(){
        this.numeroItems=0;
        this.precioTotalCarro=0;
        this.lineas.forEach(l => {this.numeroItems += l.cantidad; this.precioTotalCarro+=l.producto.precio*l.cantidad})
    }

    limpiarCarro(){
        this.lineas=[];
        this.numeroItems=0;
        this.precioTotalCarro=0;
    }

}


export class LineaCarro{
    constructor(public producto:Producto,public cantidad:number){

    }
    get totalLinea(){
        return this.cantidad * this.producto.precio;
    }
}

