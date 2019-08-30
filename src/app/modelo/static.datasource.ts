import {Injectable} from "@angular/core";
import { Producto } from "./producto.model";
import {Observable, from} from "rxjs";
import {Orden} from './orden.model'

@Injectable()
export class StaticDataSource{
   

    private productos: Producto[] = [
       new Producto(1,"Television LG", "Electronica", "Bla1",1000),
       new Producto(2,"Equipo de Musica ", "Electronica", "Descripcion 1",200),
       new Producto(3,"Television  Samsung", "Electronica", "Descripcion 1",100),
       new Producto(4,"Witcher 3", "Juegos", "Descripcion 1",100),
       new Producto(5,"Fifa 20 ", "Juegos", "Descripcion 1",100),
       new Producto(6,"Pes 20 ", "Juegos", "Descripcion 1",100),
       new Producto(7,"Lavadora ", "LineaBlanca", "Descripcion 1",100),
       new Producto(8,"Secadora ", "LineaBlanca", "Descripcion 1",100),
       new Producto(9,"Closet ", "Muebles", "Descripcion 1",400),
       new Producto(10,"Cama ", "Muebles", "Descripcion 1",1000),
       new Producto(11,"Chaqueta", "Ropa", "Descripcion 1",100),
       new Producto(12,"Pantalon", "Ropa", "Descripcion 1",100),
       new Producto(13,"Abrigo", "Ropa", "Descripcion 1",100),
       new Producto(14,"X-Box", "Electronica", "Descripcion 1",500),
       new Producto(15,"Meson", "Muebles", "Descripcion 1",100),
       new Producto(17,"Batidora", "LineaBlanca", "Descripcion 1",30),
       new Producto(18,"Afiladora", "LineaBlanca", "Descripcion 1",100),
       new Producto(19,"Gorro", "Ropa", "Descripcion 1",400),


    ];

 getProductos():Observable<Producto[]>{
    return from([this.productos]);
}

grabarOrden(orden: Orden): Observable<Orden>{
console.log(JSON.stringify(orden));
return from([orden]);

}

}