import { NgModule } from "@angular/core";
import { StaticDataSource } from './static.datasource';
import { ProductoRepositorio } from './producto.repositorio';
import { Carro } from './carro.model';
import { Orden } from './orden.model';
import { OrdenRepositorio } from './orden.repositorio';

@NgModule(
    {
       providers:[StaticDataSource,ProductoRepositorio, Carro,
    Orden,OrdenRepositorio]

    }
)

export class ModeloModule{


}