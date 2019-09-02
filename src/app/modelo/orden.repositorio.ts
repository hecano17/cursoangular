import { Injectable } from '@angular/core';
import { Orden } from './orden.model';
import { StaticDataSource } from './static.datasource';
import { Observable, from } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()

export class OrdenRepositorio{
    private ordenes:Orden[]=[];
    constructor(private dataSource:RestDataSource){ //StaticDataSource

    }

    getOrdenes():Orden[]{
        return this.ordenes;
    }
    grabarOrden(orden:Orden):Observable<Orden>{
        return this.dataSource.grabarOrden(orden);

    }

actualizarOrden(orden: Orden){
   this.dataSource.actualizarOrden(orden);
   }

   eliminarOrden(id: number){
   this.dataSource.eliminarOrden(id);
     }
}