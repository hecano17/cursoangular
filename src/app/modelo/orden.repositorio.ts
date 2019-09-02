import { Injectable } from '@angular/core';
import { Orden } from './orden.model';
import { StaticDataSource } from './static.datasource';
import { Observable, from } from 'rxjs';

@Injectable()

export class OrdenRepositorio{
    private ordenes:Orden[]=[];
    constructor(private dataSource:StaticDataSource){

    }

    getOrdenes():Orden[]{
        return this.ordenes;
    }
    grabarOrden(orden:Orden):Observable<Orden>{
        return this.dataSource.grabarOrden(orden);

    }

}