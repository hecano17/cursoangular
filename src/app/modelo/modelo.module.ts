import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { StaticDataSource } from './static.datasource';
import { ProductoRepositorio } from './producto.repositorio';
import { Carro } from './carro.model';
import { Orden } from './orden.model';
import { OrdenRepositorio } from './orden.repositorio';
import { HttpClientModule } from '@angular/common/http';
import { RestDataSource } from './rest.datasource';
import { AuthService } from './auth.services';





@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [StaticDataSource, ProductoRepositorio, Carro, Orden, OrdenRepositorio, { provide: StaticDataSource, useClass: RestDataSource },AuthService,RestDataSource]

})
export class ModeloModule { }
