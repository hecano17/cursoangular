import { NgModule } from "@angular/core";
import { StaticDataSource } from './static.datasource';
import { ProductoRepositorio } from './producto.repositorio';
import { Carro } from './carro.model';
import { Orden } from './orden.model';
import { OrdenRepositorio } from './orden.repositorio';
import { HttpClientModule } from '@angular/common/http';  
import { RestDataSource } from './rest.datasource';

@NgModule(
    {
        imports:[HttpClientModule],
        providers:[StaticDataSource,ProductoRepositorio, Carro,
         Orden,OrdenRepositorio,
        {provide: StaticDataSource, useClass: RestDataSource}
        ]

    }
)

export class ModeloModule{


}