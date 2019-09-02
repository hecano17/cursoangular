import { NgModule } from '@angular/core';
import { ModeloModule } from '../modelo/modelo.module';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { TiendaComponent } from './tienda.component';
import { ContadorDirectiva } from './contador.directive';
import { ResumenCarro } from './resumenCarro.component';
import { DetalleCarroComponent } from './detalleCarro.component';
import { CheckoutComponent } from './checkout.component';
import { RouterModule } from '@angular/router';




@NgModule({
  imports:[ModeloModule,BrowserModule,FormsModule,RouterModule],
  declarations: [TiendaComponent,ContadorDirectiva, ResumenCarro,DetalleCarroComponent,CheckoutComponent],
  exports:[TiendaComponent,DetalleCarroComponent,CheckoutComponent]//esto es necesario cuando un componente llama a otro componente.
})
export class TiendaModule { }
