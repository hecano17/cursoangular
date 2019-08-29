import { Producto } from './producto.model';
import { StaticDataSource } from './static.datasource';
import { Injectable } from '@angular/core';
import { Component } from '@angular/core';



@Injectable()
export class ProductoRepositorio{
      private productos:Producto[] = [];
      private categorias:string[] = [];

    constructor(private datasource : StaticDataSource){

        datasource.getProductos().subscribe(
             data => {
               this.productos = data;
               this.categorias = data.map(p => p.categoria)
               .filter((c,index,array) => array.indexOf(c) == index)
               .sort();//sort ordenar los datos
                     }

            )
        }


        getProductos(categoria: string = null){
            return this.productos.filter(p=> p.categoria == categoria || categoria == null);
        }


        getProducto(id:number):Producto{
               //return this.productos.filter(p => p.id == id);
               return this.productos.find(p=> p.id == id);
        }

        getCategorias(): string[]{
             return this.categorias;
        }

}