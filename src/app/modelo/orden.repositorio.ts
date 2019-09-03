import { Injectable } from '@angular/core';
import { Orden } from './orden.model';
//import { StaticDataSource } from './static.datasource';
import { Observable, from } from 'rxjs';
import { RestDataSource } from './rest.datasource';

@Injectable()

export class OrdenRepositorio{
    private ordenes:Orden[]=[];
    // constructor(private dataSource:StaticDataSource){
        constructor(private dataSource:RestDataSource){
    }

    getOrdenes():Orden[]{
        return this.ordenes;
    }
    grabarOrden(orden:Orden):Observable<Orden>{
        return this.dataSource.grabarOrden(orden);

    }

    actualizarOrden(orden:Orden){
        this.dataSource.actualizarOrden(orden).subscribe(
            o=>{
                this.ordenes.splice(this.ordenes.findIndex(o=>o.id==orden.id),1,orden);
            }
        );
    }

    eliminarOrden(id:number){
        this.dataSource.eliminarOrden(id).subscribe(
            o=>{
                this.ordenes.splice(this.ordenes.findIndex(d=>id==d.id),1);
            }
        );
    }

}