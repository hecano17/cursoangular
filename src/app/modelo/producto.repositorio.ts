import { Producto } from './producto.model';
//import { StaticDataSource } from './static.datasource';
import { Injectable } from '@angular/core';
import { RestDataSource } from './rest.datasource';

@Injectable()

export class ProductoRepositorio{
    private productos:Producto[]=[];
    private categorias:string[]=[];
    //constructor(private datasource:StaticDataSource){
        constructor(private datasource:RestDataSource){
        datasource.getProductos().subscribe(
            data => {
                this.productos=data;
                this.categorias=data.map(p =>p.categoria)
                .filter((c,index,array)=>array.indexOf(c)==index)
                .sort();
            }
        )

    }

    getProductos(categoria:string=null):Producto[]{
        return this.productos.filter(p=>p.categoria==categoria || categoria==null) ;

    }
    getProducto(identificador:number):Producto{
        return this.productos.find(p=> p.id==identificador);

    }
    getCategorias(): string[]{
        return this.categorias;
    }

    grabarProducto(producto:Producto){
        if(producto.id==null || producto==0){
            this.datasource.grabarProducto(producto).subscribe(p=>this.productos.push(p));
        }else{
            this.datasource.actualizarProducto(producto).subscribe(p => {this.productos.splice(this.productos.findIndex(p=>p.id==producto.id),1,producto);
                });
        }

    }

    eliminarProducto(id:number){
        this.datasource.eliminarProducto(id).subscribe(p=>{this.productos.splice(this.productos.findIndex(p=>p.id==id),1);
        }            
        )
    }
}