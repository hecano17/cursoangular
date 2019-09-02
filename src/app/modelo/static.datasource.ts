import {Injectable} from "@angular/core";
import {Producto} from "./producto.model";
import {Observable, from} from "rxjs"; 
import { Orden } from './orden.model';

@Injectable()
export class StaticDataSource{
    private productos:Producto[]=[
        new Producto(1,"Producto 1","Categoria 1","Descripcion 1",100),
        new Producto(2,"Producto 2","Categoria 1","Descripcion 2",200),
        new Producto(3,"Producto 3","Categoria 1","Descripcion 3",300),
        new Producto(4,"Producto 4","Categoria 2","Descripcion 4",400),
        new Producto(5,"Producto 5","Categoria 2","Descripcion 5",500),
        new Producto(6,"Producto 6","Categoria 3","Descripcion 6",600),
        new Producto(7,"Producto 7","Categoria 3","Descripcion 7",700),
        new Producto(8,"Producto 8","Categoria 3","Descripcion 8",800),
        new Producto(9,"Producto 9","Categoria 4","Descripcion 9",900),
        new Producto(10,"Producto 10","Categoria 4","Descripcion 10",1000)
    ];

getProductos():Observable<Producto[]>{
    return from([this.productos]);
}
grabarOrden(orden:Orden):Observable<Orden>{
    console.log(JSON.stringify(orden));
    return from([orden]);
}



}