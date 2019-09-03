import { Component } from '@angular/core';
import { Producto } from '../modelo/producto.model';
import { ProductoRepositorio } from '../modelo/producto.repositorio';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
    //template:`<div class="bg info p-2 text-white"><h3>Editor de Productos</h3></div>`
    templateUrl:"editorProductos.component.html"
})
export class EditorProductosComponent{
  
editando: boolean = false;
producto: Producto = new Producto();

constructor(private repositorio: ProductoRepositorio, private router: Router,
    rutaActiva: ActivatedRoute){
     this.editando = rutaActiva .snapshot.params["mode"] == "editar";
     if(this.editando){
         Object.assign(this.producto, repositorio.getProducto(rutaActiva.snapshot.params["id"]));
     }
}

grabar(form: NgForm){
    this.repositorio.grabarProducto(this.producto);
    this.router.navigateByUrl("/admin/operaciones/productos");
           }
     
}