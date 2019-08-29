import { NgModule } from "@angular/core";
import { StaticDataSource } from './static.datasource';
import { ProductoRepositorio } from './producto.repositorio';
import { Carro } from './carro.model';

@NgModule(
    {
       providers:[StaticDataSource,ProductoRepositorio, Carro]

    }
)

export class ModeloModule{


}