import { Component } from '@angular/core';
import { ProductoRepositorio } from '../modelo/producto.repositorio';

@Component({
   // template:`<div class="bg-info p-2 text-white"><h3>Tabla de Productos</h3></div>`
   templateUrl: "tablaProducto.component.html"
})
export class TablaProductoComponent{

    constructor(private repositorio: ProductoRepositorio){

    }

}